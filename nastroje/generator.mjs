/* ============================================================================
   WODA ŻYCIA — GENERATOR STRON STATYCZNYCH
   ----------------------------------------------------------------------------
   PO CO TO JEST
   Strona rysuje całą treść JavaScriptem. Google sobie z tym radzi, ale Bing
   (a razem z nim Edge i Copilot) ani wyszukiwarki sztucznej inteligencji
   (ChatGPT, Claude, Perplexity) JavaScriptu nie uruchamiają — zobaczyłyby
   pustą stronę. Ten generator rysuje więc każdą stronę raz z góry i zapisuje
   tekst wprost do HTML-a. Odwiedzający dostaje dokładnie to samo co wcześniej,
   a roboty dodatkowo widzą treść.

   JAK SIĘ TEGO UŻYWA
       node nastroje/generator.mjs

   Teksty poprawia się dalej tylko w assets/js/i18n.js, dane w content.js.
   Po zmianie uruchamiasz polecenie wyżej i gotowe strony powstają na nowo.

   CO CZYTA, A CO ZAPISUJE
       czyta     _sablony/*.html   — szkielety stron (puste, bez tekstu)
       zapisuje  *.html            — polska wersja do katalogu głównego
                 cs/, sk/, uk/ …   — pozostałe języki do własnych katalogów
                 sitemap.xml       — spis adresów dla wyszukiwarek
                 llms.txt          — skrót dla narzędzi AI

   Pliki w katalogu głównym i w katalogach języków są za każdym razem
   nadpisywane. Ręcznie poprawia się szablony w _sablony/, nigdy wynik.

   JAK TO DZIAŁA W ŚRODKU
   Nie kopiujemy logiki z site.js — uruchamiamy ją. W tle startuje mały
   serwer, a stronę rysuje Chrome, który i tak jest w komputerze. Wynik
   wygląda więc dokładnie tak, jakby otworzył ją odwiedzający.
   ========================================================================== */

import { createServer } from 'node:http';
import { execFile, execFileSync } from 'node:child_process';
import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises';
import { existsSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const KORZEN   = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SZABLONY = path.join(KORZEN, '_sablony');

/* Musi zgadzać się z LANGS i DEFAULT_LANG w assets/js/site.js. */
const JEZYKI   = ['pl', 'cs', 'sk', 'uk', 'ru', 'de', 'en', 'es', 'sv', 'hu'];
const DOMYSLNY = 'pl';

/* Postać języka dla mediów społecznościowych (og:locale). */
const LOCALE = {
  pl: 'pl_PL', cs: 'cs_CZ', sk: 'sk_SK', uk: 'uk_UA', ru: 'ru_RU',
  de: 'de_DE', en: 'en_GB', es: 'es_ES', sv: 'sv_SE', hu: 'hu_HU'
};

const DOMENA = 'https://wodazycia.org';

/* Strony generowane we wszystkich językach. Kolejność wyznacza też kolejność
   w sitemap.xml; priorytet mówi wyszukiwarce, co na stronie jest ważne.
   Adresy zostały te same co na dotychczasowym WordPressie, żeby stare
   odnośniki i pozycje w Google nie przepadły. */
const STRONY = [
  { plik: 'index.html',                   priorytet: '1.0', zmiana: 'weekly' },
  { plik: 'jestes-tu-pierwszy-raz.html',  priorytet: '0.9', zmiana: 'monthly' },
  { plik: 'kosciol.html',                 priorytet: '0.9', zmiana: 'monthly' },
  { plik: 'kids.html',                    priorytet: '0.8', zmiana: 'monthly' },
  { plik: 'aktualnosci.html',             priorytet: '0.8', zmiana: 'weekly' },
  { plik: 'wspieram.html',                priorytet: '0.7', zmiana: 'yearly' },
  { plik: 'kontakt.html',                 priorytet: '0.9', zmiana: 'monthly' },
  // Do wyszukiwarki nie trafia (patrz robots.txt), ale odnośnik do niej jest
  // w stopce każdego języka, więc musi być wszędzie wygenerowana.
  { plik: 'polityka-prywatnosci.html',    priorytet: null,  zmiana: null }
];

/* Strona błędu. GitHub Pages pokaże ją pod każdym nieistniejącym adresem,
   więc wystarczy jedna w katalogu głównym. */
const BLEDNA = '404.html';

/* Ile stron rysować naraz. Więcej = szybciej, ale więcej otwartych Chrome'ów.
   Cztery to rozsądny kompromis nawet na słabszym komputerze. */
const NARAZ = 4;

/* --------------------------------------------------------------- Chrome */
function znajdzChrome() {
  const kandydaci = [
    process.env.CHROME_PATH,
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    process.env.LOCALAPPDATA && path.join(process.env.LOCALAPPDATA, 'Google/Chrome/Application/chrome.exe'),
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  ].filter(Boolean);
  for (const c of kandydaci) if (existsSync(c)) return c;
  return null;
}

/* ---------------------------------------------------------------- adresy */
/** Adres strony w serwisie: ('uk','kosciol.html') → '/uk/kosciol' */
function adres(jezyk, plik) {
  const baza = jezyk === DOMYSLNY ? '/' : `/${jezyk}/`;
  return plik === 'index.html' ? baza : baza + plik.replace(/\.html$/, '');
}

/** Gdzie plik trafi na dysku. */
function plikDocelowy(jezyk, plik) {
  return jezyk === DOMYSLNY
    ? path.join(KORZEN, plik)
    : path.join(KORZEN, jezyk, plik);
}

/* ----------------------------------------------------------------- serwer */
/* Podaje szablony pod wszystkimi adresami językowymi. Dzięki temu strona sama
   odczyta język z adresu i wyrysuje się w nim — dokładnie jak na serwerze
   produkcyjnym. Pliki z assets/ idą prosto z dysku. */
function uruchomSerwer() {
  const serwer = createServer(async (req, res) => {
    try {
      const sciezka = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);

      // Z adresu odcinamy język — szablon i pliki w assets/ są wspólne
      // dla wszystkich języków.
      const odcinki = sciezka.split('/').filter(Boolean);
      if (odcinki.length && JEZYKI.includes(odcinki[0])) odcinki.shift();

      // Obrazki, style, skrypty i kroje pisma: prosto z projektu.
      if (/\.[a-z0-9]+$/i.test(sciezka) && !sciezka.endsWith('.html')) {
        const plik = path.join(KORZEN, odcinki.join('/'));
        if (!plik.startsWith(KORZEN)) { res.writeHead(403).end(); return; }
        const dane = await readFile(plik);
        res.writeHead(200, { 'Content-Type': typTresci(plik) }).end(dane);
        return;
      }

      let nazwa = odcinki.join('/') || 'index.html';
      if (!nazwa.endsWith('.html')) nazwa += '.html';

      const szablon = path.join(SZABLONY, nazwa);
      if (!szablon.startsWith(SZABLONY) || !existsSync(szablon)) {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' }).end('nie znaleziono');
        return;
      }
      // Przy generowaniu serwis chodzi po HTTP, a produkcyjnie po HTTPS.
      // Dyrektywa upgrade-insecure-requests kazałaby teraz przeglądarce sięgnąć
      // po https:// — serwer by nie odpowiedział i strona zostałaby pusta.
      // Na chwilę ją więc wyłączamy; do zapisanego pliku wróci przez wrocCSP().
      const tresc = (await readFile(szablon, 'utf8'))
        .replace(/;\s*upgrade-insecure-requests/i, '');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }).end(tresc);
    } catch (e) {
      res.writeHead(500).end(String(e && e.message));
    }
  });

  return new Promise((gotowe) => {
    serwer.listen(0, '127.0.0.1', () => gotowe({ serwer, port: serwer.address().port }));
  });
}

function typTresci(plik) {
  const p = path.extname(plik).toLowerCase();
  return {
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif',
    '.webp': 'image/webp', '.svg': 'image/svg+xml', '.ico': 'image/x-icon',
    '.woff': 'font/woff', '.woff2': 'font/woff2',
    '.pdf': 'application/pdf',
    '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8'
  }[p] || 'application/octet-stream';
}

/* -------------------------------------------------------------- rysowanie */
/* Chrome uruchamiamy z przekierowaniem wodazycia.org na nasz serwer. Strona
   myśli więc, że działa na docelowej domenie, i tworzy adresy bez końcówki
   .html — czyli dokładnie te, które potem będą obowiązywać w serwisie. */
function narysuj(chrome, port, url) {
  const argumenty = [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--disable-extensions',
    '--hide-scrollbars',
    // Podglądy filmów z i.ytimg.com blokować nie wolno: przy niedostępności
    // strona sięgnęłaby po gorszy wariant obrazka i on by się zapisał.
    '--host-resolver-rules=MAP wodazycia.org 127.0.0.1:' + port,
    '--virtual-time-budget=10000',
    '--dump-dom',
    url
  ];
  return new Promise((gotowe, blad) => {
    execFile(chrome, argumenty, { encoding: 'buffer', maxBuffer: 64 * 1024 * 1024, timeout: 90000 },
      (err, stdout) => {
        const html = stdout ? stdout.toString('utf8') : '';
        // Chrome zgłasza niezerowy kod powrotu także wtedy, gdy stronę
        // narysował (np. przez zablokowany zasób) — decyduje więc wynik.
        if (html.includes('</html>')) gotowe(html);
        else blad(new Error('Chrome nie zwrócił strony: ' + url + (err ? ' — ' + err.message : '')));
      });
  });
}

/* Zabezpieczenie przed cichym błędem: gdyby skrypty się nie wczytały, Chrome
   zwróciłby pusty szkielet strony, a my zapisalibyśmy go z czystym sumieniem.
   Sprawdzamy więc, że nagłówek naprawdę powstał i że strona jest w oczekiwanym
   języku. */
function sprawdzWynik(html, jezyk) {
  // Nagłówek ma każda strona.
  const naglowek = html.match(/<div id="site-header">([\s\S]*?)<\/header>/);
  if (!naglowek) {
    throw new Error('nie narysował się nagłówek — nie wczytały się skrypty?');
  }
  // Przynajmniej jedno miejsce na tekst musi być naprawdę wypełnione.
  if (!/\sdata-i18n(-html|-split)?="[^"]*"[^>]*>\s*\S/.test(html)) {
    throw new Error('strona została bez tekstu — nie wczytały się skrypty?');
  }
  const jezykStrony = (html.match(/<html lang="([a-z-]+)"/i) || [])[1];
  if (jezykStrony !== jezyk) {
    throw new Error(`strona wyrysowała się w języku „${jezykStrony}” zamiast „${jezyk}”`);
  }
}

/* Ostatnia kontrola przed zapisem: reguły bezpieczeństwa muszą być kompletne,
   a w pliku nie może zostać kod wstawiany, który i tak by je obszedł. */
function sprawdzBezpieczenstwo(html) {
  const csp = (html.match(/<meta http-equiv="Content-Security-Policy" content="([^"]*)"/i) || [])[1];
  if (!csp) throw new Error('brakuje reguł Content-Security-Policy');
  if (!csp.includes('upgrade-insecure-requests')) {
    throw new Error('w regułach brakuje upgrade-insecure-requests');
  }
  // Kod wstawiany jest zabroniony (script-src 'self'), więc przeglądarka i tak
  // by go odrzuciła — a strona po cichu by się rozpadła. Łapiemy to tutaj.
  if (/<script(?![^>]*\ssrc=)[^>]*>[\s\S]*?\S[\s\S]*?<\/script>/i.test(
        html.replace(/<script type="application\/ld\+json"[\s\S]*?<\/script>/gi, ''))) {
    throw new Error('w stronie został wstawiany <script> — reguły go zablokują');
  }
  if (/\son(click|error|load|mouseover)="/i.test(html)) {
    throw new Error('w stronie został wstawiany atrybut obsługi (onclick, onerror…)');
  }
}

/* ------------------------------------------------------- poprawki nagłówka */
/** Z narysowanej strony składa właściwy nagłówek dla danego języka. */
function popawNaglowek(html, jezyk, plik, jestBledna) {
  const url = DOMENA + adres(jezyk, plik);

  // Tytuł i opis strona ustawiła sobie sama według języka — przejmujemy je
  // też do podglądu w mediach społecznościowych, żeby nigdzie się nie różniły.
  const tytul = (html.match(/<title>([\s\S]*?)<\/title>/i) || [])[1] || '';
  const opis = (html.match(/<meta name="description" content="([^"]*)"/i) || [])[1] || '';

  let out = html;

  /* Klasa „shown” odsłania blok z animacją wejścia. Rysująca przeglądarka
     przewija stronę do końca, więc w chwili zrzutu część bloków ma ją już
     ustawioną — i w gotowym pliku zostałyby odsłonięte na starcie, zamiast
     wjechać przy przewijaniu. Kasujemy ją, żeby na każdej stronie animacja
     zachowywała się tak samo. */
  out = out.replace(/(<[^>]*\sdata-reveal(?:="[^"]*")?[^>]*\sclass=")([^"]*)"/g,
    (calosc, poczatek, klasy) => {
      const bez = klasy.split(/\s+/).filter((k) => k && k !== 'shown').join(' ');
      return poczatek + bez + '"';
    });
  out = out.replace(/(<[^>]*\sclass=")([^"]*)("[^>]*\sdata-reveal)/g,
    (calosc, poczatek, klasy, koniec) => {
      const bez = klasy.split(/\s+/).filter((k) => k && k !== 'shown').join(' ');
      return poczatek + bez + koniec;
    });

  const podmienMeta = (klucz, wartosc, atrybut = 'property') => {
    const re = new RegExp(`(<meta ${atrybut}="${klucz}" content=")[^"]*(")`, 'i');
    if (re.test(out)) out = out.replace(re, `$1${wartosc}$2`);
  };

  podmienMeta('og:url', url);
  podmienMeta('og:locale', LOCALE[jezyk] || LOCALE[DOMYSLNY]);
  podmienMeta('og:title', tytul);
  podmienMeta('og:description', opis);
  podmienMeta('twitter:title', tytul, 'name');
  podmienMeta('twitter:description', opis, 'name');

  // Adres kanoniczny — mówi wyszukiwarce, który adres jest tym właściwym.
  out = out.replace(/<link rel="canonical" href="[^"]*">/i,
    `<link rel="canonical" href="${url}">`);

  // Odnośniki do wersji językowych. Strona błędu jest jedna, wersji
  // językowych nie ma, więc u niej je pomijamy.
  const hreflang = jestBledna ? '' : JEZYKI
    .map((j) => `<link rel="alternate" hreflang="${j}" href="${DOMENA}${adres(j, plik)}">`)
    .concat(`<link rel="alternate" hreflang="x-default" href="${DOMENA}${adres(DOMYSLNY, plik)}">`)
    .join('\n');

  // Dotychczasowe wiersze hreflang zastępujemy nowo złożonymi.
  const pierwszy = out.search(/<link rel="alternate" hreflang="/i);
  if (pierwszy !== -1) {
    out = out.replace(/<link rel="alternate" hreflang="[^"]*" href="[^"]*">\s*/gi, '');
    out = out.replace(/(<link rel="canonical"[^>]*>)/i,
      hreflang ? `$1\n${hreflang}` : '$1');
  }

  // Strona błędu i polityka prywatności nie należą do wyników wyszukiwania.
  // robots.txt wprawdzie ich nie odwiedzi, ale ten znacznik zapewnia, że nie
  // pokażą się nawet wtedy, gdyby ktoś do nich odesłał.
  if (jestBledna || plik === 'polityka-prywatnosci.html') {
    if (!/<meta name="robots"/i.test(out)) {
      out = out.replace(/(<link rel="canonical"[^>]*>)/i,
        '<meta name="robots" content="noindex, follow">\n$1');
    }
  }

  return out;
}

/* Przywraca do reguł Content-Security-Policy dyrektywę, którą serwer na czas
   generowania wyłączył (patrz uruchomSerwer). W gotowym serwisie mówi ona
   przeglądarce, żeby ewentualny odnośnik http:// sama podniosła do https://. */
function wrocCSP(html) {
  return html.replace(
    /(<meta http-equiv="Content-Security-Policy" content=")([^"]*)(")/i,
    (cale, poczatek, tresc, koniec) => tresc.includes('upgrade-insecure-requests')
      ? cale
      : poczatek + tresc.replace(/;\s*$/, '') + '; upgrade-insecure-requests' + koniec);
}

/* Odnośniki do stylów, skryptów i obrazków muszą działać też z katalogu
   języka (/uk/kosciol), więc dopisujemy im wyjście poziom wyżej. Polskie
   strony leżą wprost w katalogu głównym i zostają bez zmian.

   Świadomie NIE prowadzimy ich od korzenia domeny ('/assets/…'): taki zapis
   zakłada, że serwis leży w korzeniu, i rozsypuje się wszędzie indziej —
   w podkatalogu na GitHub Pages albo po otwarciu katalogu z dysku.
   Zapis względny działa w obu przypadkach, bo i '/uk/' i '/wodazycia-web/uk/'
   mają ten sam poziom wyżej.

   Wyjątkiem zostaje strona błędu: pokazuje się pod dowolnym adresem, więc
   nie da się z góry policzyć, ile poziomów dzieli ją od korzenia. */
function bezwzgledneSciezki(html, jezyk, jestBledna) {
  if (jestBledna) return html.replace(/(href|src)="assets\//g, '$1="/assets/');
  if (jezyk === DOMYSLNY) return html;
  return html.replace(/(href|src)="assets\//g, '$1="../assets/');
}

/* ------------------------------------------------- podział tłumaczeń
   assets/js/i18n.js ma wszystkie dziesięć języków naraz — blisko 190 kB,
   które przeglądarka pobiera i przetwarza przy każdym wejściu, choć potrzebny
   jest tylko jeden język. Generator rozbija ten plik na assets/js/i18n/<kod>.js
   i w gotowych stronach podmienia odnośnik. Strona ukraińska wczytuje wtedy
   ukraiński plus polski (jako awaryjny), a nie dziesięć bloków.

   Plik źródłowy zostaje nietknięty — to w nim dalej poprawia się teksty. */
async function podzielTlumaczenia() {
  const zrodlo = await readFile(path.join(KORZEN, 'assets/js/i18n.js'), 'utf8');
  // Plik jest zwykłym JavaScriptem, więc po prostu go wykonujemy.
  const I18N = new Function(zrodlo + '; return I18N;')();

  const katalog = path.join(KORZEN, 'assets/js/i18n');
  await mkdir(katalog, { recursive: true });

  const rozmiary = {};
  for (const jezyk of JEZYKI) {
    const czesc = {};
    // Nazwy wszystkich języków — potrzebne do przełącznika w nagłówku.
    for (const j of JEZYKI) czesc[j] = { langName: I18N[j].langName };
    // Pełny język strony oraz polski jako awaryjny przy brakującym kluczu.
    czesc[DOMYSLNY] = I18N[DOMYSLNY];
    czesc[jezyk] = I18N[jezyk];

    const tresc = '/* Plik tworzy nastroje/generator.mjs z assets/js/i18n.js.\n'
      + '   Nie edytuj go ręcznie — przy kolejnym uruchomieniu zmiany przepadną.\n'
      + '   Zawiera tylko język „' + jezyk + '” (oraz polski jako awaryjny). */\n'
      + 'const I18N = ' + JSON.stringify(czesc, null, 1) + ';\n';

    await writeFile(path.join(katalog, jezyk + '.js'), tresc, 'utf8');
    rozmiary[jezyk] = tresc.length;
  }
  return rozmiary;
}

/** W gotowej stronie podmienia pełny plik tłumaczeń na wersję jednojęzyczną. */
function podmienTlumaczenia(html, jezyk) {
  return html.replace(/(src="[^"]*assets\/js\/)i18n\.js"/g, '$1i18n/' + jezyk + '.js"');
}

/* --------------------------------------------------------------- sitemap */
/* --- Data ostatniej zmiany --------------------------------------------------
   W sitemapie <lastmod> ma mówić, kiedy strona naprawdę się zmieniła. Kiedyś
   wpisywało się tu datę uruchomienia generatora — a ten chodzi też wtedy, gdy
   nic się nie zmieniło, więc wszystkie adresy udawały świeże. Google taki
   zapis rozpoznaje i przestaje go brać na poważnie w całym serwisie.

   Datę bierzemy więc z historii w Gicie: kiedy padł ostatni commit dotykający
   danego pliku. Zmiana jeszcze niezacommitowana liczy się jako dzisiejsza —
   inaczej serwis twierdziłby, że jest starszy, niż jest naprawdę.

   Bez Gita (pobrany ZIP) używana jest data pliku na dysku. */
const CACHE_DAT = new Map();

function dataPliku(sciezkaWzgledna) {
  if (CACHE_DAT.has(sciezkaWzgledna)) return CACHE_DAT.get(sciezkaWzgledna);
  const pelna = path.join(KORZEN, sciezkaWzgledna);
  let data = null;

  try {
    const zmienione = execFileSync('git', ['status', '--porcelain', '--', sciezkaWzgledna],
      { cwd: KORZEN, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
    data = zmienione
      ? new Date().toISOString().slice(0, 10)
      : execFileSync('git', ['log', '-1', '--format=%cs', '--', sciezkaWzgledna],
          { cwd: KORZEN, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim() || null;
  } catch { /* Gita nie ma — niżej spadniemy na datę pliku. */ }

  if (!data) {
    try { data = statSync(pelna).mtime.toISOString().slice(0, 10); }
    catch { data = new Date().toISOString().slice(0, 10); }
  }

  CACHE_DAT.set(sciezkaWzgledna, data);
  return data;
}

/* Treść strony nie powstaje tylko z jej szablonu — teksty są w i18n.js, dane
   w content.js, a rysowaniem zajmuje się site.js. Zmiana któregokolwiek z nich
   jest zmianą strony, więc bierzemy najnowszą datę ze wszystkich. */
const WSPOLNE = ['assets/js/content.js', 'assets/js/i18n.js', 'assets/js/site.js'];

function dataStrony(plik) {
  return [path.posix.join('_sablony', plik), ...WSPOLNE]
    .map(dataPliku)
    .sort()
    .pop();                             // ciągi RRRR-MM-DD sortują się jak daty
}

function zlozSitemap() {
  const wpisy = [];

  for (const s of STRONY) {
    if (!s.priorytet) continue;         // strony spoza wyszukiwarki pomijamy
    const zmienione = dataStrony(s.plik);
    for (const jezyk of JEZYKI) {
      const odnosniki = JEZYKI
        .map((j) => `    <xhtml:link rel="alternate" hreflang="${j}" href="${DOMENA}${adres(j, s.plik)}"/>`)
        .join('\n');
      wpisy.push(
`  <url>
    <loc>${DOMENA}${adres(jezyk, s.plik)}</loc>
${odnosniki}
    <xhtml:link rel="alternate" hreflang="x-default" href="${DOMENA}${adres(DOMYSLNY, s.plik)}"/>
    <lastmod>${zmienione}</lastmod>
    <changefreq>${s.zmiana}</changefreq>
    <priority>${s.priorytet}</priority>
  </url>`);
    }
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<!-- Ten plik tworzy nastroje/generator.mjs. Nie edytuj go ręcznie —
     przy kolejnym uruchomieniu zmiany by przepadły. -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${wpisy.join('\n')}
</urlset>
`;
}

/* ---------------------------------------------------------------- llms.txt */
/* Skrót dla narzędzi sztucznej inteligencji (llmstxt.org). Zbiera w jednym
   miejscu to, o co ludzie pytają najczęściej — gdzie kościół jest, kiedy są
   spotkania, jak się odezwać — i odsyła do poszczególnych stron. Powstaje
   z tych samych danych strukturalnych, które są w gotowym index.html, więc
   nie może się z serwisem rozjechać. */
function zlozLlmsTxt(html) {
  const blok = html.match(/<script type="application\/ld\+json" id="schema-org">([\s\S]*?)<\/script>/);
  if (!blok) return null;

  let org;
  try {
    const dane = JSON.parse(blok[1]);
    const graf = dane['@graph'] || [dane];
    org = graf.find((x) => x['@type'] === 'Church');
  } catch (e) { return null; }
  if (!org) return null;

  const a = org.address || {};
  const wiersze = [];

  wiersze.push('# ' + (org.name || 'Kościół Woda Życia'));
  wiersze.push('');
  wiersze.push('> ' + (org.description || ''));
  wiersze.push('');
  if (org.disambiguatingDescription) wiersze.push(org.disambiguatingDescription);
  if (org.areaServed) wiersze.push('Zasięg: ' + org.areaServed.name + ', Polska.');
  wiersze.push('');

  wiersze.push('## Podstawowe dane');
  wiersze.push('');
  wiersze.push('- **Adres spotkań:** ' + [a.streetAddress, a.postalCode, a.addressLocality]
    .filter(Boolean).join(', '));
  if (org.legalName) wiersze.push('- **Nazwa prawna:** ' + org.legalName);
  if (org.memberOf) wiersze.push('- **Związek wyznaniowy:** ' + org.memberOf.name + ' (' + org.memberOf.url + ')');
  if (org.telephone) wiersze.push('- **Telefon:** ' + org.telephone);
  if (org.email) wiersze.push('- **E-mail:** ' + org.email);
  if (org.employee && org.employee.name) {
    wiersze.push('- **Pastor:** ' + org.employee.name
      + (org.employee.jobTitle ? ' (' + org.employee.jobTitle + ')' : ''));
  }
  if (org.foundingDate) wiersze.push('- **Działa od:** ' + org.foundingDate);
  wiersze.push('');

  const godziny = org.openingHoursSpecification || [];
  if (godziny.length) {
    const DNI = {
      Sunday: 'niedziela', Monday: 'poniedziałek', Tuesday: 'wtorek', Wednesday: 'środa',
      Thursday: 'czwartek', Friday: 'piątek', Saturday: 'sobota'
    };
    wiersze.push('## Regularne spotkania');
    wiersze.push('');
    for (const h of godziny) {
      const dzien = DNI[String(h.dayOfWeek).split('/').pop()] || h.dayOfWeek;
      wiersze.push('- **' + (h.name || 'Spotkanie') + ':** ' + dzien + ' ' + h.opens);
    }
    wiersze.push('');
  }

  wiersze.push('## Strony');
  wiersze.push('');
  const OPIS = {
    'index.html': 'strona główna — godziny spotkań, aktualności, transmisje',
    'jestes-tu-pierwszy-raz.html': 'co czeka odwiedzającego po raz pierwszy, częste pytania, w co wierzymy',
    'kosciol.html': 'kim jesteśmy, wartości, pastor i zespół liderów',
    'kids.html': 'zajęcia dla dzieci w niedzielę',
    'aktualnosci.html': 'nowości i ogłoszenia z życia kościoła',
    'wspieram.html': 'jak wesprzeć kościół darem',
    'kontakt.html': 'kontakt i mapa dojazdu'
  };
  for (const s of STRONY) {
    if (!OPIS[s.plik]) continue;
    const u = DOMENA + adres(DOMYSLNY, s.plik);
    wiersze.push('- [' + u + '](' + u + '): ' + OPIS[s.plik]);
  }
  wiersze.push('');

  wiersze.push('## Wersje językowe');
  wiersze.push('');
  wiersze.push('Serwis jest w dziesięciu językach. Polski działa w katalogu głównym, pozostałe we własnym katalogu:');
  wiersze.push(JEZYKI.filter((j) => j !== DOMYSLNY).map((j) => DOMENA + '/' + j + '/').join(', ') + '.');
  wiersze.push('');

  if ((org.sameAs || []).length) {
    wiersze.push('## Oficjalne profile');
    wiersze.push('');
    /* Przy archiwalnym podcaście trzeba dopisać, że nie jest aktualizowany.
       Bez tego AI podaje go jako źródło bieżących kazań, a słuchacz trafia
       na nagrania sprzed lat. W danych strukturalnych ta uwaga być nie może —
       sameAs przyjmuje tylko same adresy — więc dopisuje się dopiero tutaj. */
    for (const url of org.sameAs) wiersze.push('- ' + url);
    wiersze.push('');
  }

  return wiersze.join('\n');
}

/* ------------------------------------------------------------------ bieg */
async function main() {
  const chrome = znajdzChrome();
  if (!chrome) {
    console.error('Nie znalazłem Chrome ani Edge. Zainstaluj Chrome albo podaj');
    console.error('ścieżkę do niego w zmiennej CHROME_PATH.');
    process.exit(1);
  }

  const szablony = (await readdir(SZABLONY)).filter((f) => f.endsWith('.html'));
  if (!szablony.length) {
    console.error('W katalogu _sablony/ nie ma żadnych stron.');
    process.exit(1);
  }

  console.log('Rysuję przez: ' + chrome);

  const rozmiary = await podzielTlumaczenia();
  const pelny = (await readFile(path.join(KORZEN, 'assets/js/i18n.js'), 'utf8')).length;
  console.log('Tłumaczenia rozbite na ' + JEZYKI.length + ' plików: '
    + Math.round(pelny / 1024) + ' kB → ok. '
    + Math.round(Math.max(...Object.values(rozmiary)) / 1024) + ' kB na stronę');

  const { serwer, port } = await uruchomSerwer();
  console.log('Serwer pomocniczy działa na porcie ' + port + '\n');

  // Lista wszystkiego, co ma powstać.
  const zadania = [];
  for (const s of STRONY) {
    for (const jezyk of JEZYKI) zadania.push({ jezyk, plik: s.plik, jestBledna: false });
  }
  zadania.push({ jezyk: DOMYSLNY, plik: BLEDNA, jestBledna: true });

  let gotowe = 0;
  const bledy = [];

  async function przetworz(zadanie) {
    const url = 'http://wodazycia.org' + adres(zadanie.jezyk, zadanie.plik);
    try {
      let html = await narysuj(chrome, port, url);
      sprawdzWynik(html, zadanie.jezyk);
      html = popawNaglowek(html, zadanie.jezyk, zadanie.plik, zadanie.jestBledna);
      html = bezwzgledneSciezki(html, zadanie.jezyk, zadanie.jestBledna);
      html = podmienTlumaczenia(html, zadanie.jezyk);
      html = wrocCSP(html);
      sprawdzBezpieczenstwo(html);

      const cel = plikDocelowy(zadanie.jezyk, zadanie.plik);
      await mkdir(path.dirname(cel), { recursive: true });
      await writeFile(cel, html, 'utf8');

      gotowe++;
      const stan = String(gotowe).padStart(3, ' ') + '/' + zadania.length;
      console.log(`  ${stan}  ${path.relative(KORZEN, cel).replace(/\\/g, '/')}`);
    } catch (e) {
      bledy.push(`${zadanie.jezyk}/${zadanie.plik}: ${e.message}`);
    }
  }

  // Rysujemy grupami, żeby komputer nie miał naraz zbyt wiele na głowie.
  for (let i = 0; i < zadania.length; i += NARAZ) {
    await Promise.all(zadania.slice(i, i + NARAZ).map(przetworz));
  }

  await writeFile(path.join(KORZEN, 'sitemap.xml'), zlozSitemap(), 'utf8');
  console.log('\n  sitemap.xml');

  // Skrót dla AI składa się z gotowej strony głównej, więc musi powstać po niej.
  try {
    const glowna = await readFile(path.join(KORZEN, 'index.html'), 'utf8');
    const llms = zlozLlmsTxt(glowna);
    if (llms) {
      await writeFile(path.join(KORZEN, 'llms.txt'), llms, 'utf8');
      console.log('  llms.txt');
    } else {
      bledy.push('llms.txt: nie udało się odczytać danych strukturalnych z index.html');
    }
  } catch (e) {
    bledy.push('llms.txt: ' + e.message);
  }

  serwer.close();

  if (bledy.length) {
    console.error('\nNiektóre strony się nie udały:');
    for (const b of bledy) console.error('  ' + b);
    process.exit(1);
  }
  console.log(`\nGotowe — wygenerowano ${gotowe} stron w ${JEZYKI.length} językach.`);
}

main().catch((e) => { console.error(e); process.exit(1); });

/* ============================================================================
   WODA ŻYCIA — OPTYMALIZACJA ZDJĘĆ
   ----------------------------------------------------------------------------
   DO CZEGO TO JEST
   Zdjęcia przeniesione z WordPressa ważyły razem ponad 5 MB. Na telefonie
   w słabszym zasięgu strona ładowałaby się kilkanaście sekund. Ten skrypt
   zmniejsza je do rozsądnych wymiarów i zapisuje w formacie WebP, który przy
   tej samej jakości waży zwykle 3–5 razy mniej niż JPEG.

   JAK SIĘ TEGO UŻYWA
       node nastroje/obrazy.mjs             podgląd — pokaże, co by zrobił
       node nastroje/obrazy.mjs --zapisz    naprawdę zapisze pliki .webp

   Potrzebny jest tylko Chrome albo Edge. Nic się nie instaluje.

   CO ROBI
   Dla każdego pliku .jpg i .png z listy niżej tworzy odpowiednik .webp
   o zadanej maksymalnej szerokości. Oryginały ZOSTAJĄ — gdyby coś poszło
   nie tak, wystarczy wrócić do nazw .jpg w szablonach i content.js.

   Logo i ikony celowo pomijamy: są małe, a favikony muszą zostać w PNG/ICO,
   bo część narzędzi WebP nie przyjmie.
   ========================================================================== */

import { createServer } from 'node:http';
import { execFile } from 'node:child_process';
import { readFile, writeFile, readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const KORZEN = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
/* Oryginały w pełnej rozdzielczości leżą w _zrodla/img/ — stamtąd czytamy,
   a gotowe .webp zapisujemy do assets/img/. Przy pierwszym uruchomieniu
   (zanim oryginały zostaną przeniesione) bierzemy je jeszcze z assets/img/. */
const ZRODLO_KAT = existsSync(path.resolve(KORZEN, '_zrodla/img')) ? '_zrodla/img' : 'assets/img';
const CEL_KAT = 'assets/img';
const ZAPISZ = process.argv.includes('--zapisz');

/* Maksymalna szerokość według przeznaczenia. Zdjęcia tła i nagłówków
   oglądamy na całą szerokość ekranu, zdjęcia w kolumnach najwyżej na pół. */
const SZEROKOSCI = [
  [/^(hero|koszalin)\./, 1920],                  // pełnoekranowy slider
  [/^hero-2\./, 1600],                           // drugie ujęcie — i tak mocno kadrowane
  [/^naglowek-/, 1920],                          // nagłówki podstron
  [/^sekcja-mapa\./, 1920],                      // tło sekcji na całą szerokość
  [/^tlo-/, 1200],                               // tła w kolumnach, nigdy na całą szerokość
  [/^yt-placeholder\./, 1280],                   // zastępczy kadr filmu
  [/./, 1200]                                    // zdjęcia w kolumnach i kartach
];

/* Zdjęcia pionowe potrafią być bardzo wysokie — i tak są przycinane przez
   kolumnę, więc nie ma sensu trzymać pełnej wysokości. */
const MAKS_WYSOKOSC = 1500;

/* Czego nie ruszamy. */
const POMIN = /^(logo|logo-footer|logo-white|favicon|apple-touch-icon|icon|paypal)/;

const JAKOSC = 0.82;

/* Obrazek podglądu przy udostępnianiu w mediach społecznościowych.
   Musi zostać w JPEG: Facebook, LinkedIn i część komunikatorów wciąż nie
   pokazują podglądu z pliku WebP. Powstaje z kadru startowego, przycięty
   do proporcji 1,91:1, których oczekuje Open Graph. */
const OG = { zrodlo: '_zrodla/img/hero.jpg', cel: 'assets/img/og-image.jpg', w: 1200, h: 630 };

function znajdzChrome() {
  const kandydaci = [
    process.env.CHROME_PATH,
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    process.env.LOCALAPPDATA && path.join(process.env.LOCALAPPDATA, 'Google/Chrome/Application/chrome.exe'),
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    '/usr/bin/google-chrome', '/usr/bin/chromium',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  ].filter(Boolean);
  return kandydaci.find((c) => existsSync(c)) || null;
}

function maksSzerokosc(nazwa) {
  for (const [wzor, w] of SZEROKOSCI) if (wzor.test(nazwa)) return w;
  return 1200;
}

function strona(zadania) {
  return `<!DOCTYPE html><meta charset="utf-8"><body><div id="out"></div><script>
(async function () {
  const zadania = ${JSON.stringify(zadania)};
  const wyniki = [];
  for (const z of zadania) {
    const obraz = await new Promise((ok) => {
      const i = new Image();
      i.onload = () => ok(i);
      i.onerror = () => ok(null);
      i.src = '/' + z.plik;
    });
    if (!obraz) { wyniki.push(z.plik + '|BLAD'); continue; }
    const skala = Math.min(1, z.maks / obraz.naturalWidth, ${MAKS_WYSOKOSC} / obraz.naturalHeight);
    const w = Math.round(obraz.naturalWidth * skala);
    const h = Math.round(obraz.naturalHeight * skala);
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    const k = c.getContext('2d');
    k.imageSmoothingEnabled = true; k.imageSmoothingQuality = 'high';
    k.drawImage(obraz, 0, 0, w, h);
    wyniki.push(z.plik + '|' + w + 'x' + h + '|' + c.toDataURL('image/webp', ${JAKOSC}));
  }

  // Obrazek Open Graph — kadr 1,91:1 wycięty ze środka, zapisany jako JPEG.
  const og = ${JSON.stringify(OG)};
  const zr = await new Promise((ok) => {
    const i = new Image();
    i.onload = () => ok(i); i.onerror = () => ok(null);
    i.src = '/' + og.zrodlo;
  });
  if (zr) {
    const c = document.createElement('canvas');
    c.width = og.w; c.height = og.h;
    const k = c.getContext('2d');
    k.imageSmoothingEnabled = true; k.imageSmoothingQuality = 'high';
    const s = Math.max(og.w / zr.naturalWidth, og.h / zr.naturalHeight);
    const w = zr.naturalWidth * s, h = zr.naturalHeight * s;
    k.drawImage(zr, (og.w - w) / 2, (og.h - h) / 2, w, h);
    wyniki.push(og.cel + '|' + og.w + 'x' + og.h + '|' + c.toDataURL('image/jpeg', 0.85));
  }

  document.getElementById('out').textContent = wyniki.join('###');
})();
</script></body>`;
}

async function main() {
  const chrome = znajdzChrome();
  if (!chrome) { console.error('Nie znalazłem Chrome ani Edge.'); process.exit(1); }

  const katalog = path.join(KORZEN, ZRODLO_KAT);
  const pliki = (await readdir(katalog))
    .filter((f) => /\.(jpe?g|png)$/i.test(f))
    .filter((f) => !POMIN.test(f));

  if (!pliki.length) { console.log('Nie ma czego optymalizować.'); return; }

  const zadania = [];
  for (const f of pliki) {
    zadania.push({ plik: ZRODLO_KAT + '/' + f, maks: maksSzerokosc(f) });
  }

  const serwer = createServer(async (req, res) => {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }).end(strona(zadania));
      return;
    }
    try {
      const s = path.join(KORZEN, decodeURIComponent(req.url).replace(/^\/+/, ''));
      if (!s.startsWith(KORZEN)) { res.writeHead(403).end(); return; }
      res.writeHead(200).end(await readFile(s));
    } catch { res.writeHead(404).end(); }
  });
  await new Promise((r) => serwer.listen(0, '127.0.0.1', r));
  const port = serwer.address().port;

  console.log('Przetwarzam ' + pliki.length + ' plików przez: ' + chrome);
  console.log(ZAPISZ ? '(tryb zapisu)\n' : '(tylko podgląd — dopisz --zapisz, żeby utworzyć pliki)\n');

  const html = await new Promise((ok, nie) => {
    execFile(chrome, ['--headless=new', '--disable-gpu', '--no-sandbox',
      '--virtual-time-budget=60000', '--dump-dom', 'http://127.0.0.1:' + port + '/'],
      { encoding: 'buffer', maxBuffer: 512 * 1024 * 1024, timeout: 300000 },
      (e, out) => {
        const s = out ? out.toString('utf8') : '';
        s.includes('</html>') ? ok(s) : nie(new Error('Chrome nie zwrócił strony' + (e ? ' — ' + e.message : '')));
      });
  });
  serwer.close();

  const wszystko = (html.match(/<div id="out">([^<]*)<\/div>/) || [])[1] || '';
  if (!wszystko) { console.error('Pusty wynik.'); process.exit(1); }

  let przed = 0, po = 0, zrobione = 0;
  for (const kawalek of wszystko.split('###')) {
    const [plik, wymiary, url] = kawalek.split('|');
    if (wymiary === 'BLAD' || !url) { console.log('  ✗ ' + plik); continue; }
    const dane = Buffer.from(url.split(',')[1], 'base64');
    // Obrazek Open Graph ma już docelową nazwę; reszta zmienia rozszerzenie.
    const jestOG = plik === OG.cel;
    const cel = jestOG ? plik
      : CEL_KAT + '/' + path.basename(plik).replace(/\.(jpe?g|png)$/i, '.webp');
    const stary = jestOG ? 0 : (await stat(path.join(KORZEN, plik))).size;
    if (!jestOG) { przed += stary; po += dane.length; zrobione++; }
    if (ZAPISZ) await writeFile(path.join(KORZEN, cel), dane);
    console.log('  ' + path.basename(cel).padEnd(28) + wymiary.padEnd(11) +
      (stary ? (stary / 1024).toFixed(0).padStart(5) + ' kB → ' : '            ') +
      (dane.length / 1024).toFixed(0).padStart(5) + ' kB');
  }

  console.log('\n  ' + zrobione + ' plików: ' + (przed / 1024 / 1024).toFixed(2) + ' MB → ' +
    (po / 1024 / 1024).toFixed(2) + ' MB  (oszczędność ' +
    (100 - (po / przed) * 100).toFixed(0) + '%)');
  if (!ZAPISZ) console.log('\n  Nic nie zapisano. Uruchom z --zapisz, żeby utworzyć pliki .webp.');
}

main().catch((e) => { console.error(e); process.exit(1); });

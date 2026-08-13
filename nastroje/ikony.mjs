/* ============================================================================
   WODA ŻYCIA — WYTWARZANIE IKON SERWISU
   ----------------------------------------------------------------------------
   DO CZEGO TO JEST
   Ikona w zakładce przeglądarki (favicon) i ikona na ekranie telefonu powstają
   ze znaku „W” — assets/img/logo.png. Ten skrypt robi z niego wszystkie
   potrzebne rozmiary naraz, żeby nie trzeba było przycinać ich ręcznie.

   JAK SIĘ TEGO UŻYWA
       node nastroje/ikony.mjs

   Potrzebny jest tylko Chrome albo Edge, który i tak jest w komputerze.
   Nic się nie instaluje, żadnego node_modules.

   CO POWSTANIE (wszystko jest nadpisywane)
       assets/img/favicon.png            192×192   ikona w zakładce
       assets/img/apple-touch-icon.png   180×180   ikona na ekranie iPhone'a
       assets/img/icon.png               256×256   zapas w większym rozmiarze
       favicon.ico                        48×48    zapas w katalogu głównym

   Po co jeszcze favicon.ico, skoro w nagłówku stron jest odnośnik do
   favicon.png: część narzędzi pyta o adres /favicon.ico na sztywno, niezależnie
   od tego, co jest w nagłówku — czytniki, podglądy odnośników przy
   udostępnianiu, starsze przeglądarki. Bez pliku dostają błąd 404. Dlatego leży
   w katalogu głównym, a nie w assets/img: ten adres jest kwestią zwyczaju
   i nie da się go przenieść. W środku jest zwykły PNG, tylko owinięty
   nagłówkiem formatu ICO — przeglądarka umie z płótna wydać wyłącznie PNG,
   więc otoczkę dopisujemy tutaj i dzięki temu nic nie trzeba instalować.

   Rozmiar favikony musi zostać wielokrotnością 48 px, inaczej Google nie
   pokaże jej w wynikach wyszukiwania. Jeśli go zmienisz, popraw też
   sizes="…" w _sablony/*.html.

   ZMIANA LOGO
   Podmień assets/img/logo.png na nowy znak (najlepiej z przezroczystym tłem)
   i uruchom skrypt ponownie. Marginesy policzą się same — znak zostanie
   znaleziony w obrazku po nieprzezroczystych pikselach, więc nie ma znaczenia,
   gdzie dokładnie w kadrze leży.
   ========================================================================== */

import { createServer } from 'node:http';
import { execFile } from 'node:child_process';
import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const KORZEN = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ZRODLO = 'assets/img/logo.png';

/* nazwa pliku, długość boku, ile miejsca zostawić dookoła (część boku) */
const IKONY = [
  ['favicon.png', 192, 0.06],
  ['apple-touch-icon.png', 180, 0.12],   // ikona na ekranie zniesie większy margines
  ['icon.png', 256, 0.06],
  ['favicon.ico', 48, 0.06]              // w katalogu głównym, patrz nagłówek skryptu
];

/* Przeglądarka umie z płótna wydać tylko PNG albo JPEG, żadnego ICO. Format ICO
   od czasów Windows Vista pozwala jednak trzymać PNG wprost w środku — wystarczy
   owinąć go dwudziestodwubajtowym nagłówkiem.

   Nagłówek ma dwie części: opis pliku (ile obrazków jest w środku) i wpis
   o jedynym obrazku (jak jest duży i gdzie w pliku się zaczyna). */
function zapakujDoIco(png, bok) {
  const naglowek = Buffer.alloc(22);
  naglowek.writeUInt16LE(0, 0);          // zarezerwowane, zawsze zero
  naglowek.writeUInt16LE(1, 2);          // typ 1 = ikona
  naglowek.writeUInt16LE(1, 4);          // liczba obrazków w środku
  naglowek.writeUInt8(bok, 6);           // szerokość (0 oznaczałoby 256)
  naglowek.writeUInt8(bok, 7);           // wysokość
  naglowek.writeUInt8(0, 8);             // liczba barw palety — 0 = pełne barwy
  naglowek.writeUInt8(0, 9);             // zarezerwowane
  naglowek.writeUInt16LE(1, 10);         // płaszczyzny barw
  naglowek.writeUInt16LE(32, 12);        // bitów na piksel (RGBA)
  naglowek.writeUInt32LE(png.length, 14);// długość obrazka
  naglowek.writeUInt32LE(22, 18);        // gdzie obrazek się zaczyna — tuż za nagłówkiem
  return Buffer.concat([naglowek, png]);
}

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

const STRONA = `<!DOCTYPE html><meta charset="utf-8"><body><div id="out"></div><div id="info"></div><script>
const o = new Image();
o.onload = function () {
  const m = document.createElement('canvas');
  m.width = o.width; m.height = o.height;
  const mk = m.getContext('2d', { willReadFrequently: true });
  mk.drawImage(o, 0, 0);
  const px = mk.getImageData(0, 0, o.width, o.height).data;

  // Znak to wszystko, co nie jest przezroczyste ani białe — po tym przycinamy.
  let x1 = 1e9, y1 = 1e9, x2 = -1, y2 = -1;
  for (let y = 0; y < o.height; y++) {
    for (let x = 0; x < o.width; x++) {
      const i = (y * o.width + x) * 4;
      if (px[i+3] < 30) continue;
      if (px[i] > 240 && px[i+1] > 240 && px[i+2] > 240) continue;
      if (x < x1) x1 = x; if (x > x2) x2 = x;
      if (y < y1) y1 = y; if (y > y2) y2 = y;
    }
  }
  if (x2 < 0) { document.getElementById('out').textContent = 'ZNAK-NIEZNALEZIONY'; return; }
  const sw = x2 - x1 + 1, sh = y2 - y1 + 1;
  document.getElementById('info').textContent = JSON.stringify({ x: x1, y: y1, szerokosc: sw, wysokosc: sh });

  const wyniki = [];
  for (const [nazwa, rozmiar, marginesUdzial] of ${JSON.stringify(IKONY)}) {
    const p = document.createElement('canvas');
    p.width = rozmiar; p.height = rozmiar;
    const k = p.getContext('2d');
    k.imageSmoothingEnabled = true; k.imageSmoothingQuality = 'high';
    const margines = rozmiar * marginesUdzial, wolne = rozmiar - 2 * margines;
    const skala = Math.min(wolne / sw, wolne / sh);
    const w = sw * skala, h = sh * skala;
    k.drawImage(o, x1, y1, sw, sh, (rozmiar - w) / 2, (rozmiar - h) / 2, w, h);
    wyniki.push(nazwa + '|' + p.toDataURL('image/png'));
  }
  document.getElementById('out').textContent = wyniki.join('###');
};
o.onerror = function () { document.getElementById('out').textContent = 'BLAD-WCZYTANIA'; };
o.src = '/${ZRODLO}';
</script></body>`;

async function main() {
  const chrome = znajdzChrome();
  if (!chrome) {
    console.error('Nie znalazłem Chrome ani Edge. Zainstaluj Chrome albo podaj ścieżkę');
    console.error('do niego w zmiennej CHROME_PATH.');
    process.exit(1);
  }
  if (!existsSync(path.join(KORZEN, ZRODLO))) {
    console.error('Brakuje wzorca ' + ZRODLO + '.');
    process.exit(1);
  }

  const serwer = createServer(async (req, res) => {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }).end(STRONA);
      return;
    }
    let dane;
    try {
      const s = path.join(KORZEN, req.url.replace(/^\/+/, '').split('?')[0]);
      if (!s.startsWith(KORZEN)) { res.writeHead(403).end(); return; }
      dane = await readFile(s);
    } catch { res.writeHead(404).end(); return; }
    res.writeHead(200, { 'Content-Type': 'image/png' }).end(dane);
  });

  await new Promise((r) => serwer.listen(0, '127.0.0.1', r));
  const port = serwer.address().port;
  console.log('Rysuję przez: ' + chrome + '\n');

  const html = await new Promise((ok, nie) => {
    execFile(chrome, ['--headless=new', '--disable-gpu', '--no-sandbox',
      '--virtual-time-budget=8000', '--dump-dom', 'http://127.0.0.1:' + port + '/'],
      { encoding: 'buffer', maxBuffer: 128 * 1024 * 1024, timeout: 60000 },
      (e, out) => {
        const s = out ? out.toString('utf8') : '';
        s.includes('</html>') ? ok(s) : nie(new Error('Chrome nie zwrócił strony' + (e ? ' — ' + e.message : '')));
      });
  });
  serwer.close();

  const wszystko = (html.match(/<div id="out">([^<]*)<\/div>/) || [])[1] || '';
  if (!wszystko.includes('data:image/png')) {
    console.error('Nie udało się zrobić ikon: ' + (wszystko || 'pusty wynik'));
    process.exit(1);
  }
  console.log('Znak znaleziony we wzorcu: ' + ((html.match(/<div id="info">([^<]*)<\/div>/) || [])[1] || ''));

  for (const kawalek of wszystko.split('###')) {
    const [nazwa, url] = kawalek.split('|');
    const png = Buffer.from(url.split(',')[1], 'base64');
    const bok = png.readUInt32BE(16);
    // Wymiary czytamy z PNG także przy ikonie — w środku ICO nadal jest PNG.
    const jestIco = nazwa.endsWith('.ico');
    const dane = jestIco ? zapakujDoIco(png, bok) : png;
    // favicon.ico należy do katalogu głównego, pozostałe ikony do assets/img.
    await writeFile(path.join(KORZEN, jestIco ? '' : 'assets/img', nazwa), dane);
    console.log('  ' + nazwa.padEnd(24) + bok + '×' + png.readUInt32BE(20)
      + '   ' + (dane.length / 1024).toFixed(1) + ' kB');
  }
  console.log('\nGotowe. Ikony pojawią się w serwisie po wgraniu na serwer;');
  console.log('w przeglądarce czasem trzeba wczytać stronę bez pamięci podręcznej (Ctrl+F5).');
}

main().catch((e) => { console.error(e); process.exit(1); });

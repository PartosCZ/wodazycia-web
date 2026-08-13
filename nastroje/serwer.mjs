/* ============================================================================
   WODA ŻYCIA — SERWER PODGLĄDU
   ----------------------------------------------------------------------------
   Do sprawdzenia gotowego serwisu na własnym komputerze — tak, jak zobaczy go
   odwiedzający, razem z adresami bez końcówki .html.

       node nastroje/serwer.mjs           → http://localhost:8080
       node nastroje/serwer.mjs 3000      → inny port

   Zatrzymujesz go klawiszami Ctrl+C. Do samego działania serwisu nie jest
   potrzebny — pliki wystarczy wgrać na hosting.
   ========================================================================== */

import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const KORZEN = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PORT = parseInt(process.argv[2] || '8080', 10);

const TYPY = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif',
  '.webp': 'image/webp', '.svg': 'image/svg+xml', '.ico': 'image/x-icon',
  '.woff': 'font/woff', '.woff2': 'font/woff2',
  '.pdf': 'application/pdf',
  '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8'
};

createServer(async (req, res) => {
  let sciezka = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  let plik = path.join(KORZEN, sciezka);

  if (!plik.startsWith(KORZEN)) { res.writeHead(403).end(); return; }

  // Katalog → index.html; adres bez końcówki → dopisz .html.
  // Tak samo zachowuje się GitHub Pages, Netlify i Cloudflare Pages.
  if (existsSync(plik) && statSync(plik).isDirectory()) plik = path.join(plik, 'index.html');
  else if (!existsSync(plik) && existsSync(plik + '.html')) plik += '.html';

  if (!existsSync(plik)) {
    const blad = path.join(KORZEN, '404.html');
    const tresc = existsSync(blad) ? await readFile(blad) : 'nie znaleziono';
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' }).end(tresc);
    return;
  }

  const dane = await readFile(plik);
  res.writeHead(200, {
    'Content-Type': TYPY[path.extname(plik).toLowerCase()] || 'application/octet-stream',
    'Cache-Control': 'no-store'
  }).end(dane);
}).listen(PORT, () => {
  console.log('Podgląd serwisu: http://localhost:' + PORT + '/');
  console.log('Zatrzymanie: Ctrl+C');
});

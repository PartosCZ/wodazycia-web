/* ============================================================================
   WODA ŻYCIA — PORZĄDKOWANIE ADRESU
   ----------------------------------------------------------------------------
   Media społecznościowe i systemy reklamowe doklejają do linku kody śledzące
   (fbclid z Facebooka, igsh z Instagrama, utm_… z newsletterów), które potem
   straszą w pasku adresu. Ten plik kasuje je na samym początku wczytywania,
   więc odwiedzający widzi tylko wodazycia.org i nazwę strony.

   Wczytuje się w <head> BEZ atrybutu defer — musi zadziałać, zanim strona się
   wyrysuje, inaczej kod śledzący mignąłby na moment w adresie.

   Nowy kod śledzący wystarczy dopisać do listy `smieci` niżej.
   Osobny plik (zamiast wklejania kodu w każdą stronę) pozwala zabronić
   kodu wstawianego w regułach Content-Security-Policy — patrz nagłówek stron.
   ========================================================================== */
(function () {
  'use strict';
  try {
    var adres = new URL(location.href);
    var parametry = adres.searchParams;
    var zmienione = false;
    var smieci = [
      'fbclid', 'igshid', 'igsh',                          // Facebook, Instagram
      'gclid', 'dclid', 'gbraid', 'wbraid', '_ga', '_gl',  // Google
      'msclkid',                                           // Microsoft / Bing
      'ttclid',                                            // TikTok
      'twclid', 'ref_src', 'ref_url',                      // X (Twitter)
      'li_fat_id',                                         // LinkedIn
      'yclid',                                             // Yandex
      'mc_cid', 'mc_eid',                                  // Mailchimp
      'si'                                                 // YouTube (udostępnianie)
    ];
    smieci.forEach(function (klucz) {
      if (parametry.has(klucz)) { parametry.delete(klucz); zmienione = true; }
    });
    Array.from(parametry.keys()).forEach(function (klucz) {
      if (klucz.indexOf('utm_') === 0) { parametry.delete(klucz); zmienione = true; }
    });
    /* Adresy serwisu działają bez końcówki .html (wodazycia.org/kosciol).
       Kto przyjdzie starym linkiem z .html, zobaczy czysty adres — strona się
       przy tym nie przeładowuje. Poza domeną produkcyjną (z dysku, z lokalnego
       serwera) końcówka zostaje, bo tam przeglądarka jej potrzebuje. */
    var sciezka = adres.pathname;
    if (/(^|\.)wodazycia\.org$/.test(location.hostname)) {
      var czysta = sciezka.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
      if (czysta !== sciezka) { sciezka = czysta; zmienione = true; }
    }
    if (zmienione) {
      var reszta = parametry.toString();
      history.replaceState(null, '', sciezka + (reszta ? '?' + reszta : '') + adres.hash);
    }
  } catch (e) { /* stara przeglądarka albo otwarcie przez file:// — adres zostaje bez zmian */ }
})();

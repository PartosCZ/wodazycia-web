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

  /* --------------------------------------------------- animacja wejścia treści
     Bloki, które wjeżdżają przy przewijaniu, są ukryte regułą dla `html.js`.
     Klasa musi trafić na dokument, ZANIM przeglądarka cokolwiek narysuje —
     inaczej treść mignęłaby najpierw na swoim miejscu, po czym zeskoczyła
     o 85 px w dół i dopiero wróciła. Właśnie dlatego ustawiamy ją tutaj,
     w <head>, a nie w site.js, który wykonuje się na końcu strony.

     Gdyby site.js z jakiegoś powodu się nie wczytał, treść zostałaby ukryta
     na zawsze — po czterech sekundach odsłaniamy ją więc bezwarunkowo.
     site.js kasuje ten zapasowy licznik, gdy tylko wystartuje. */
  document.documentElement.classList.add('js');
  window.__wzOdslon = setTimeout(function () {
    document.documentElement.classList.remove('js');
  }, 4000);

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
       przy tym nie przeładowuje. Po otwarciu pliku z dysku końcówka zostaje,
       bo bez serwera przeglądarka bez niej pliku nie znajdzie.
       Ta sama reguła co CZYSTE_ADRESY w assets/js/site.js. */
    var sciezka = adres.pathname;
    if (location.protocol !== 'file:') {
      var czysta = sciezka.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
      if (czysta !== sciezka) { sciezka = czysta; zmienione = true; }
    }
    if (zmienione) {
      var reszta = parametry.toString();
      history.replaceState(null, '', sciezka + (reszta ? '?' + reszta : '') + adres.hash);
    }
  } catch (e) { /* stara przeglądarka albo otwarcie przez file:// — adres zostaje bez zmian */ }
})();

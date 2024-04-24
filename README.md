# Webáruház
    Ez a webáruház azzal céllal jött létre, hogy árú alatt, olcsóbban hozzáférjenek a márkás ruhához

## Specifikáció - publikus
    1. A publikus felületen div-ekben jelenítsük meg az adatokat. az előzetes minta  alapján! 
    2. Figyelj a reszponzitvitásra!
    3. Az oldalon legyen szűrési és rendezési lehetőség pl. keresés névben, leírásban, szűrés kategória szerint, bizonyos árnál olcsóbb, vagy drágább termék.

    4. Kosár funkció:  A publikus felületen a terméket helyezheted a kosárba. A kosárban lévő termékeket listázhatod, törölheted, módosíthatod az elemszámát, majd leadhatod a rendelést!
    6. A kosárban lévő termékeket listázhatod, törölheted, módosíthatod az elemszámát, majd leadhatod a rendelést!
    7. ++ rendelés összeálítás PDF-formátumban
    8. ++ Egyetlen termék megjelenítése: Minden termékhez (divhez) tartozik egy gomb, amivel tudjuk nézni, azt az egyetlen terméket.
    9. ++ A kiemelt termék mellet megjelenik egy bal és egy jobb léptető gomb, amivel léptetni tudjuk a terméket.

## Alkalmazott függvények

## listakezelo.js modul
    összetett adatszerkezetben kulcs érték párrokal tárolja az adatokat. 

## Fuggvenyek.js modul
**divTermekOsszeallit(lista) -> txt**
    Összeállítja a listában lévő elemeket div-be mint card

 **megjelenites(txt) -> visszatérési érték nincsen**
    megjeleníti a html szöveget, egy html elemben

 ## adatKezelo.js
 **szuresTermekNevSzerint(lista,szurtSzoveg) -> SZURTLISTA**
   a szűrőben írt szó alapján kilistázza azokat az adatokat a listából, amelyekben szerepel a név, vagy leírás vagy kategória mezejében az adott szó

**arSzerintCsokkenoNovekvo(lista) -> lista**
   a listában ár szerint csökkenő vagy növekvő sorban  fogja rendezi a termékeket

**kosarbaLevoElemTorles(lista,TermekIndex) -> lista**
    Kosárhoz hozzáadott terméket, eltávolítjuk.

**kattintasKosarba(lista) -> visszatérés kosarbaRakottLista**
   Visszatér azokkal az adatokkal, amit kosárhoz adtunk.

**kosarbaLevoElemekMegjelenites(kosarbaRakottLista) -> visszatérési érték nincs**
    megjeleníti a kosarbaRakottLista tárolt adatait, egy html elemben.


## urlapKezelo.js modul
**szamlazas(lista) -> visszatérési érték nincsen**
    Bekeréjűk a számlázási adatokat, majd validált adatok kiirjuk a konzolra.

## init.js modul 
**init(lista) -> visszatérési értéke nincsen**
    az importált metódusokat egységben kezeli


**SzuresTermekNevEsemeny() -> visszatérési érték nincs**
  eseményre feliratkoztatjúk, mely a kereső mezőben írt szöveg alapján jeleníti meg 
  ehhez a szuresNevSzerint(lista,szurtszoveg) metódust meghívjuk

**arRendezEsemeny(lista) -> visszatérési érték nincs**
  kattintásra kiváltó eseményre feliratkoztatjúk mely csökkenő/nökvevő sorrend rendezi a tételek árait, ehhez megkell hívjuk a arSzerintCsokkenoNovekvo(lista) metódust.

**kosarbLevoElemTorlesEsemeny() -> visszatérési nincs**
  kattintást kiváltó eseményre feliratkoztatjúk, mely kitörli az adott id-n lévő terméket, ehhez szükségünk van a kosarbaLevoElemTorles(lista,TermekIndex) metódusra.

**kosarbaHozzadEsemeny() -> kosarbaRakottLista**
  feliratkoztatjúk a kosár gombot a kattintás eseményre, amely hozzáadja a kosárhoz az adott terméket, ehhez szükségünk van a kattintasKosarba(lista) metódusra

**kosarbaLevoElemekMegjelenites(kosarbaRakottLista) -> visszatérési érték nincs**
 megjeleníti a kosárba hozzáadott termékekekt.










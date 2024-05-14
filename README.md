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
    megjelenít egy HTML szemantikus elemben(div-ben), újabb html elemet

**adminTermekOsszeallit(lista) -> txt**
Összeállítja a listában lévő elemeket táblázata formában.

**kosarbaTermekekMegjelenites(txt) -> visszatérési érték nincsen**
    megjelenít  egy HTML szemantikus elemben(div-ben), újabb html elemet

**kosarbaTermekekDarabSzamMegjelenites(txt) -> visszatérési érték nincsen**
    megjelenít  egy HTML szemantikus elemben(div-ben), újabb html elemet

**kosarbaVegosszegMegjelenites(txt) -> visszatérési érték nincsen**
    megjelenít  egy HTML szemantikus elemben(div-ben), újabb html elemet


 ## adatKezelo.js
 **szuresNevSzerint(lista,szurtSzoveg) -> SZURTLISTA**
   a szűrőben írt szó alapján kilistázza azokat az adatokat a listából, amelyekben szerepel a név a  listában.

**arSzerintCsokkenoNovekvo(lista,irany) -> lista**
   a listában ár szerint csökkenő vagy növekvő sorban  fogja rendezi a termékeket

**kosarbaLevoElemTorles(lista,index) -> lista**
    Kosárhoz hozzáadott terméket, eltávolítjuk.

**kattintasKosarba(lista,index,termekLista) -> visszatérési érték nincsen**
   Kosárba hozzáadja a terméket.

**abcSzerintCsokkenoNovekvo -> lista**
    ABC szerint rendezi, a listát.


## urlapKezelo.js modul
**szamlazas() -> adat**
    Bekeréjűk a számlázási adatokat, majd validált adatok kiirjuk a konzolra.

## init.js modul 
**init(lista) -> visszatérési értéke nincsen**
    az importált metódusokat egységben kezeli


**SzuresTermekNevSzerintEsemeny() -> visszatérési érték nincsen**
  eseményre feliratkoztatjúk, mely a kereső mezőben írt szöveg alapján jeleníti meg 
  ehhez a szuresNevSzerint(lista,szurtszoveg) metódust meghívjuk

**arRendezEsemeny(lista) -> visszatérési érték nincsen**
  kattintásra kiváltó eseményre feliratkoztatjúk mely csökkenő/nökvevő sorrend rendezi a tételek árait, ehhez megkell hívjuk a  arSzerintCsokkenoNovekvo(lista, nevIrany), init(lista) metódusokat.

**abcRendezEsemeny(lista) -> visszateresi ertek nincsen**
kattintást kiváltó eseményre abc szerint rendezi a termékeket, szükségünk van a abcSzerintCsokkenoNovekvo(lista, nevIrany), init(lista) metódusokra.

**adminElemTorles() -> visszateresi ertek nincsen**
kattintást kiváltó eseményre admin felületen az adott terméket kitörli, ehhez szükségünk van a kosarbaLevoElemTorles(lista,index), init(lista) metódusokra.

**szamlazasEsemeny() -> visszateresi ertek nincsen**
kattintást kiváltó eseményre megjeleníti konzolon, az adatokat.

**kosarbLevoElemTorlesEsemeny() -> visszatérési értéke nincsen**
  kattintást kiváltó eseményre feliratkoztatjúk, mely kitörli az adott id-n lévő helyi tárolóban eltárolt terméket, ehhez szükségünk van a kosarbaLevoElemTorles(lista,TermekIndex) metódusra.

**kosarbaHozzadEsemeny() -> visszatérési értéke nincsen**
  feliratkoztatjúk a kosár gombot a kattintás eseményre, amely hozzáadja a kosárhoz az adott terméket, ehhez szükségünk van a kattintasKosarba(lista,index,termekLista) metódusra. ezt követően lokális tárolóba helyezzük a KOSARBA_HOZZADOTT_ELEM-et.
A esemény kiváltás végén, meghívja KosarHozzadDbSzamMegjelenites() eljárást.

**kosarHozzadDbSzamMegjelenites() -> visszatérési értéke nincsen**
Megjeleniti a hány darab termék van jelenleg a kosárban, ehhez szükségünk van a helyi tárolóban lévő elmentett adatokra.  kosarbaTermekekDarabSzamMegjelenites(txt) metódusra.

**kosarbaHozzaadottElemek() -> visszatérési érték nincsen**
 Ha a helyi tárolóban van elmentett adat, megjeleníti a kosárhoz hozzáadott termékeket.
 Ehhez megkell hivjuk adminTermekOsszealit(lista) , kosarbaTermekekMegjelenites(txt), kosarErtekMegjelenites() metódusokat.

 **kosarErtekMegjelenites() -> visszateresi ertek nincsen**
 összegzi helyi tárolóban elmentett termékek végleges árát. kosarbaVegosszegMegjelenites(txt) metódusra szükségünk van.


 












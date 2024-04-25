export function szuresNevSzerint(lista,szurtSzoveg){
    const SZURTLISTA  = lista.filter(function(elem){
        return elem.kutyaNeve.includes(szurtSzoveg);
    });

    return SZURTLISTA;
}
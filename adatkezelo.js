export function szuresNevSzerint(lista,szurtSzoveg){
    const SZURTLISTA  = lista.filter(function(elem){
        return elem.kutyaNeve.includes(szurtSzoveg);
    });
    console.log(SZURTLISTA);
    return SZURTLISTA;
}


//NEM TELJESEN JO
export function arSzerintCsokkenoNovekvo(lista,irany) {
    lista.sort(function(a, b) {
       return a.ar > b.ar ? 1 * irany  : -1 * irany;
    });
    
    return lista;
}
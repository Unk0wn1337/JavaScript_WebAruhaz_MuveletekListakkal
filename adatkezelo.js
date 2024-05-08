export function szuresNevSzerint(lista,szurtSzoveg){
    const SZURTLISTA  = lista.filter(function(elem){
        return elem.kutyaNeve.includes(szurtSzoveg);
    });
    
    return SZURTLISTA;
}




export function arSzerintCsokkenoNovekvo(lista,irany) {
    lista.sort(function(a, b) {
       return a.ar > b.ar ? 1 * irany  : -1 * irany;
    });
    
    return lista;
}

export function abcSzerintCsokkenoNovekvo(lista,irany){
    lista.sort(function(a,b){
        return a.kutyaNeve.toUpperCase() > b.kutyaNeve.toUpperCase() ? 1*irany : -1*irany; 
    })
    return lista;
}



export function kattintasKosarba(lista,index,termekLista){
    termekLista.push(lista[index]);

}
export function kosarbaLevoElemTorles(lista,index){
    lista.splice(index,1);
    return lista;
}
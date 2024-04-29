import { ADATOK_LISTA } from "./listakezelo.js";
import { divTermekOsszealit, megjelenites  } from "./fuggvenyek.js";
import { arSzerintCsokkenoNovekvo, szuresNevSzerint } from "./adatkezelo.js";


let nevIrany = 1;
init(ADATOK_LISTA);

export function init(lista){
    let txt = divTermekOsszealit(lista);
    megjelenites(txt);
    arRendezEsemeny(lista);
   
    
}
function szuresNevTermekSzerintEsemeny(){
    const SZURO_ELEM = $("#szNev");
    SZURO_ELEM.on("keyup", function(){
        let szuroSzoveg = SZURO_ELEM.val();
        const LISTA = szuresNevSzerint(ADATOK_LISTA,szuroSzoveg);
        init(LISTA);
    });
}
// NEM TELJESEN JO
function arRendezEsemeny(lista){
    const AR_SZERINT_RENDEZ = $("#arSzerintRendez");
    AR_SZERINT_RENDEZ.on("click",function(){
        const LISTA = arSzerintCsokkenoNovekvo(lista,nevIrany);
        console.log(LISTA);
        nevIrany*=(-1);
        init(LISTA);
    })
}


szuresNevTermekSzerintEsemeny();


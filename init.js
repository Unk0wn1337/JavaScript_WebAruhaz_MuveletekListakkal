import { ADATOK_LISTA } from "./listakezelo.js";
import { divTermekOsszealit, megjelenites  } from "./fuggvenyek.js";
import { szuresNevSzerint } from "./adatkezelo.js";


export function init(lista){
    let txt = divTermekOsszealit(ADATOK_LISTA);
    megjelenites(txt);
    
}
export function szuresNevSzerintEsemeny(){
    const SZURO_ELEM = $("#szNev");
    SZURO_ELEM.on("keyup", function(){
        let szuroSzoveg = SZURO_ELEM.val();
        const LISTA = szuresNevSzerint(ADATOK_LISTA,szuroSzoveg);
        init(LISTA);
    })
}

init(ADATOK_LISTA);
szuresNevSzerintEsemeny();


import { ADATOK_LISTA } from "./listakezelo.js";
import { adminMegjelenites, adminTermekOsszealit, divTermekOsszealit, megjelenites  } from "./fuggvenyek.js";
import { arSzerintCsokkenoNovekvo, kattintasKosarba, kosarbaLevoElemTorles, szuresNevSzerint } from "./adatkezelo.js";


let nevIrany = 1;
init(ADATOK_LISTA);

export function init(lista){
    let txt = divTermekOsszealit(lista);
    megjelenites(txt);
    let adminAdatok = adminTermekOsszealit(lista);
    adminMegjelenites(adminAdatok);
    arRendezEsemeny(lista);
    kosarbaLevoElemTorlesEsemeny();
    kosarbaHozzadEsemeny();
    
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

const KOSARBA_HOZZADOTT_ELEM = [];


// HA ELTUDJUK TAROLNI STATIKUSAN A KOSARBA LEVO ELEMEKET
function kosarbaLevoElemTorlesEsemeny(){
    const KUKA_ELEM = $(".kuka");
    KUKA_ELEM.on("click",function(){
        let index =  event.target.id;
        const lista = kosarbaLevoElemTorles(KOSARBA_HOZZADOTT_ELEM,index);
        init(lista);
    });
}


function kosarbaHozzadEsemeny(){
    const KOSAR_GOMB = $(".kosar");
    KOSAR_GOMB.on("click",function(){
        let index = event.target.id;
        kattintasKosarba(ADATOK_LISTA,index,KOSARBA_HOZZADOTT_ELEM);
        console.log(index);
        console.log(KOSARBA_HOZZADOTT_ELEM);
        alert("Termék hozzáadva a kosárhoz!")
    });
}



szuresNevTermekSzerintEsemeny();



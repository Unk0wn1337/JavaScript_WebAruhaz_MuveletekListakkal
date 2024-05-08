import { ADATOK_LISTA } from "./listakezelo.js";
import { adminMegjelenites, adminTermekOsszealit, divTermekOsszealit, kosarbaTermekekMegjelenites, megjelenites  } from "./fuggvenyek.js";
import { abcSzerintCsokkenoNovekvo, arSzerintCsokkenoNovekvo, kattintasKosarba, kosarbaLevoElemTorles, szuresNevSzerint } from "./adatkezelo.js";
import { szamlazas } from "./urlapkezelo.js";


let nevIrany = 1;
init(ADATOK_LISTA);
arRendezEsemeny(ADATOK_LISTA);
abcRendezEsemeny(ADATOK_LISTA);

export function init(lista){
    let txt = divTermekOsszealit(lista);
    megjelenites(txt);
    let adminAdatok = adminTermekOsszealit(lista);
    adminMegjelenites(adminAdatok);
    kosarbaLevoElemTorlesEsemeny();
    kosarbaHozzadEsemeny();
    adminElemTorles();
    
}
function szuresNevTermekSzerintEsemeny(){
    const SZURO_ELEM = $("#szNev");
    SZURO_ELEM.on("keyup", function(){
        let szuroSzoveg = SZURO_ELEM.val();
        const LISTA = szuresNevSzerint(ADATOK_LISTA,szuroSzoveg);
        init(LISTA);
    });
}


function arRendezEsemeny(lista){
    const AR_SZERINT_RENDEZ = $("#arSzerintRendez");
    AR_SZERINT_RENDEZ.on("click",function(){
        const LISTA = arSzerintCsokkenoNovekvo(lista,nevIrany);
        console.log(LISTA);
        nevIrany*=(-1);
        console.log(nevIrany);
        init(LISTA);
    })
}

function abcRendezEsemeny(lista){
    const ABC_SZERINT_RENDEZ = $("#abcSzerintRendez");
    ABC_SZERINT_RENDEZ.on("click", function(){
        const LISTA = abcSzerintCsokkenoNovekvo(lista,nevIrany);
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

function adminElemTorles(){
    const TORLES = $(".torles");
    TORLES.on("click",function(){
        let index =  event.target.id;
        const lista = kosarbaLevoElemTorles(ADATOK_LISTA,index);
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
        let kosarbaHozzadadottElemToJSON = JSON.stringify(KOSARBA_HOZZADOTT_ELEM);
        localStorage.setItem("kosarbaKutyak",kosarbaHozzadadottElemToJSON);
        // localStorage.setItem("nev", ADATOK_LISTA[index].kutyaNeve);
        // localStorage.setItem("kora", ADATOK_LISTA[index].kora);
        // localStorage.setItem("ara", ADATOK_LISTA[index].ar);
        alert("Termék hozzáadva a kosárhoz!")
        let ideiglenesKosar = adminTermekOsszealit(KOSARBA_HOZZADOTT_ELEM)
        kosarbaTermekekMegjelenites(ideiglenesKosar);
        
    });
}


szamlazasEsemeny();

const SZAMLAZASI_ADATOK = [];

function szamlazasEsemeny(){
    const MEGEROSIT = $("#megerosites");
    MEGEROSIT.on("click",function(){
        event.preventDefault;
        let szamla = szamlazas(SZAMLAZASI_ADATOK);
        console.log(szamla);
    });
}


szuresNevTermekSzerintEsemeny();



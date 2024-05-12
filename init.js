import { ADATOK_LISTA } from "./listakezelo.js";
import { adminMegjelenites, adminTermekOsszealit, divTermekOsszealit, kosarbaTermekekDarabSzamMegjelenites, kosarbaTermekekMegjelenites, kosarbaVegosszegMegjelenites, megjelenites  } from "./fuggvenyek.js";
import { abcSzerintCsokkenoNovekvo, arSzerintCsokkenoNovekvo, kattintasKosarba, kosarbaLevoElemTorles, szuresNevSzerint } from "./adatkezelo.js";
import { szamlazas } from "./urlapkezelo.js";


let nevIrany = 1;
init(ADATOK_LISTA);
arRendezEsemeny(ADATOK_LISTA);
abcRendezEsemeny(ADATOK_LISTA);

szamlazasEsemeny();

szuresNevTermekSzerintEsemeny();



export function init(lista){
    let txt = divTermekOsszealit(lista);
    megjelenites(txt);
    let adminAdatok = adminTermekOsszealit(lista);
    adminMegjelenites(adminAdatok);
    kosarbaHozzadEsemeny();
    kosarHozzadDbSzamMegjelenites();
    kosarbaHozzaadottElemek();
    kosarbaLevoElemTorlesEsemeny();
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


function adminElemTorles(){
    const TORLES = $(".torles");
    TORLES.on("click",function(){
        let index =  event.target.id;
        const lista = kosarbaLevoElemTorles(ADATOK_LISTA,index);
        init(lista);
    });
}
const SZAMLAZASI_ADATOK = [];

function szamlazasEsemeny(){
    const MEGEROSIT = $("#megerosites");
    MEGEROSIT.on("click", function(event){
        event.preventDefault();
        console.log(szamlazas()); 
    });
}


function kosarbaHozzadEsemeny(){
    const KOSAR_GOMB = $(".kosar");
    KOSAR_GOMB.on("click",function(){
        let index = event.target.id;
        kattintasKosarba(ADATOK_LISTA,index,KOSARBA_HOZZADOTT_ELEM);
        console.log(index);
        console.log(KOSARBA_HOZZADOTT_ELEM);
        let kosarbaHozzaAdottElemToJSON = JSON.stringify(KOSARBA_HOZZADOTT_ELEM);
        localStorage.setItem("kosarbaKutyak",kosarbaHozzaAdottElemToJSON);
        kosarHozzadDbSzamMegjelenites();
        
    });
}

function kosarHozzadDbSzamMegjelenites(){
    let kosarbaHozzaAdottElemJSON = JSON.parse(localStorage.getItem("kosarbaKutyak"));
    let db = kosarbaHozzaAdottElemJSON.length;
    let txt = `<p>🛒 ${db} db</p>`;
    kosarbaTermekekDarabSzamMegjelenites(txt);
}

function kosarbaHozzaadottElemek(){
    let kosarbaMarHozzaadottElemLocalStorage = JSON.parse(localStorage.getItem("kosarbaKutyak"));
    let txt = adminTermekOsszealit(kosarbaMarHozzaadottElemLocalStorage);
    kosarbaTermekekMegjelenites(txt);
    kosarErtekMegjelenites();
}

function kosarbaLevoElemTorlesEsemeny(){
    const TORLES = $(".torles");
    TORLES.on("click",function(){
        let kosarbaMarHozzaadottElemLocalStorage = JSON.parse(localStorage.getItem("kosarbaKutyak"));
        let index =  event.target.id;
        const lista = kosarbaLevoElemTorles(kosarbaMarHozzaadottElemLocalStorage,index);
        localStorage.setItem("kosarbaKutyak", JSON.stringify(lista))
        init(lista)
    });
}

function kosarErtekMegjelenites(){
    let kosarbaMarHozzaadottElemLocalStorage = JSON.parse(localStorage.getItem("kosarbaKutyak"));
    let osszeg = 0;
    console.log(kosarbaMarHozzaadottElemLocalStorage);
    kosarbaMarHozzaadottElemLocalStorage.forEach(element => {
        osszeg += element.ar;
    });

    let txt = `<p>💸${osszeg} Ft</p>`;
    kosarbaVegosszegMegjelenites(txt);
}








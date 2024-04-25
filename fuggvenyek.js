export function divTermekOsszealit(lista){
    let txt = ``;
    lista.forEach((element,i) => {
            txt += `<div class="card">`;
                txt += `<div class="kutya">`;
                    txt += `<img class="kutyaKepek" src="${element.kep}" alt="kutya${i}">`;
                    //<img src="" alt="">
                    txt += `<h4>${element.kutyaNeve}</h4>`;
                    txt += `<p>${element.kora}</p>`;
                    txt += `<p>${element.neme}</p>`;
                    txt += `<p>${element.ar}</p>`;
                    txt += `<button id="${i}">Kosarba</button>`              
                txt += `</div>`;
        txt += `</div>`;
    });

    return txt;
}


export function  megjelenites(txt){
  const KARTYAK_DIV = $(".kartyak");
  KARTYAK_DIV.html(txt);
}
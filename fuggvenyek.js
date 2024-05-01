export function divTermekOsszealit(lista){
    let txt = ``;
    lista.forEach((element,i) => {
            txt += `<div class="card">`;
                    txt += `<img class="kutyaKepek" src="${element.kep}" alt="kutya${i}">`;
                    //<img src="" alt="">
                    txt += `<h4>${element.kutyaNeve}</h4>`;
                    txt += `<p>${element.kora} eves </p>`;
                    txt += `<p>neme: ${element.neme}</p>`;
                    txt += `<p>${element.ar} Ft</p>`;
                    txt += `<button id="${i}" class="kosar">Kosarba</button>`              
        txt += `</div>`;
    });

    return txt;
}

export function  megjelenites(txt){
  const KARTYAK_DIV = $(".kartyak");
  KARTYAK_DIV.html(txt);
}

/*KODDUPLIKALAS! ADMIN RESZNEL */

export function adminTermekOsszealit(lista){
    let txt = `<table>`;
    txt += `<tr>`;
    for (const key in lista[0]) {
      txt += `<th>${key}</th>`
    }
    txt += `<th>torles</th>`
    txt += `</tr>`;

    lista.forEach((element,i) => {
      txt += `<tr>`
      for (const key in element) {
        txt += `<td>${element[key]}</td>`
      }
      txt +=  `<td id="${i}" class="torles">❌</td>` 
      txt += `</tr>`
    });
    txt += `</table>`
    return txt;
}

export function adminMegjelenites(txt){
  const ADMIN_ADATOK = $(".adminTablazat");
  ADMIN_ADATOK.html(txt)
}
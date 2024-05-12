export function divTermekOsszealit(lista){
    let txt = ``;
    lista.forEach((element,i) => {
            txt += `<div class="card">`;
                    txt += `<img class="kutyaKepek" src="${element.kep}" alt="kutya${i}">`;
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

export function kosarbaTermekekMegjelenites(txt){
  const KOSAR_ARTICLE_TABLE = $(".kosarArticleTable");
  KOSAR_ARTICLE_TABLE.html(txt)
}
export function kosarbaTermekekDarabSzamMegjelenites(txt){
  const KOSAR_DIV_TERMEK_DB = $(".kosarhozHozzadottTermekekDarabSzam");
  KOSAR_DIV_TERMEK_DB.html(txt)
}

export function kosarbaVegosszegMegjelenites(txt){
  const VEGOSSZEG_DIV = $(".kosarVegOsszeg");
  VEGOSSZEG_DIV.html(txt);
}
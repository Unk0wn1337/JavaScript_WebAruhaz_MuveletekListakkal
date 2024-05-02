export function szamlazas(SZAMLAZASI_ADATOK){
    let kartyaTulajdonos = $("#cardholder");
    let kartyaSzam = $("#cardnumber");
    let lejaratiDatum = $("#expiry");
    let cvv = $("#cvv");
    adat= {
            kartyaTulajdonosok :kartyaTulajdonos.val(),
            kartyaSzamok : kartyaSzam.val(),
            lejaratiDatumok :lejaratiDatum.val(),
            cvvk: cvv.val()
        }  
    SZAMLAZASI_ADATOK.push(adat);
}
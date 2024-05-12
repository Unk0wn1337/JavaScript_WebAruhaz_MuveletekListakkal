export function szamlazas(){
    let kartyaTulajdonos = $("#cardholder");
    let kartyaSzam = $("#cardnumber");
    let lejaratiDatum = $("#expiry");
    let cvv = $("#cvv");
    let adat= {
            kartyaTulajdonosok :kartyaTulajdonos.val(),
            kartyaSzamok : kartyaSzam.val(),
            lejaratiDatumok :lejaratiDatum.val(),
            cvvk: cvv.val()
        }  
    return adat;
}
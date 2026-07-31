

function carburante() {


  let distanza = document.getElementById("distance");
  let consumo = document.getElementById("consumption");
  let prezzo = document.getElementById("fuelPrice");

  distanza = parseFloat(distanza.value);
  consumo = parseFloat(consumo.value);
  prezzo = parseFloat(prezzo.value);

  if (distanza > 0 && consumo > 0 && prezzo > 0) {
    let spesa = (distanza / consumo) * prezzo;

    let tabella = document.getElementById("tabella-carburante");
    let nuovaRiga = "<tr><td>" + distanza + " km</td><td>" + consumo + " km/L</td><td>" + prezzo + " €</td><td>" + spesa.toFixed(2) + " €</td></tr>";
    tabella.innerHTML += nuovaRiga;
  }
  else {
    alert("Inserisci valori validi per distanza, consumo e prezzo del carburante.");
  }



}




function denaro() {

  let ammontare = document.getElementById("amount");
  let primavaluta = document.getElementById("fromCurrency");
  let secondovaluta = document.getElementById("toCurrency");

  let importo = parseFloat(ammontare.value);
  let valutaDa = primavaluta.value;
  let valutaA = secondovaluta.value;




  if (importo > 0) {

    let tassi = {
      "EUR": 1,
      "USD": 1.1,
      "GBP": 0.9,
      "JPY": 130
    };


    let importoConvertito = (importo / tassi[valutaDa]) * tassi[valutaA];

    let tabella = document.getElementById("tabella-conversione");
    let nuovaRiga = "<tr><td>" + importo + " " + valutaDa + "</td><td>" + valutaDa + "</td><td>" + valutaA + "</td><td>" + importoConvertito.toFixed(2) + " " + valutaA + "</td></tr>";
    tabella.innerHTML += nuovaRiga;

  }

  else {
    alert("Inserisci un importo valido.");
  }

}



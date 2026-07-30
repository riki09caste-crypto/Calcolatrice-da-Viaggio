

function calculate() {


  let primo = document.getElementById("distance");
  let secondo = document.getElementById("consumption");
  let terzo = document.getElementById("fuelPrice");

  let distanza = parseFloat(primo.value);
  let consumo = parseFloat(secondo.value);
  let prezzo = parseFloat(terzo.value);

  if (distanza > 0 && consumo > 0 && prezzo > 0) {
    let spesa = (distanza / consumo) * prezzo;
    alert("La spesa totale per il carburante sarà di: " + spesa.toFixed(2) + " €");
  }
  else {
    alert("Inserisci valori validi per distanza, consumo e prezzo del carburante.");
  }
}
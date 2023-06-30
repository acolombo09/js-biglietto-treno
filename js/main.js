/*
Il programma dovrà chiedere all’utente il numero di chilometri 
che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale 
del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo). 
Questo richiederà un minimo di ricerca.
*/

const firstName = prompt("Inserisci il tuo nome");
const lastName = prompt("Inserisci il tuo cognome");
const reqKms = prompt("Quanti Km hai bisogno di percorrere?");
const age = prompt("Inserisci la tua età");
const pricePerKm = 0.21;

document.getElementById("first-name").innerHTML = firstName;
document.getElementById("last-name").innerHTML =  lastName;
document.getElementById("age").innerHTML = age;
document.getElementById("req-kms").innerHTML = reqKms;

const priceKms = (reqKms * pricePerKm);

// console.log(priceKms + " euro");
document.getElementById("price-kms").innerHTML = priceKms + " euro";


if (age < 18) {
  console.log("Sei troppo piccolo, ecco il tuo sconto");
} else {
  console.log("Bene, hai l'età giusta per non avere uno sconto");

  if (age > 65) {
    console.log("Compimenti, oltre che la pensione anche il maggiore sconto");
  } else if (age >= 18 && age <= 40){
    console.log("Mi spiace, non sei abbastanza anziano, +10% di rincaro");
  } else {
    console.log("Paghi il prezzo base");
  }
}

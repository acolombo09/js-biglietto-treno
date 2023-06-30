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
const favColor = prompt("Inserisci il tuo colore preferito");
const fixedNumber = 21;
const age = prompt("Inserisci la tua età");

document.getElementById("first-name").innerHTML = firstName;
document.getElementById("last-name").innerHTML =  lastName;
document.getElementById("fav-color").innerHTML =  favColor;

document.getElementById("age").innerHTML = age;

console.log(firstName + lastName + favColor + fixedNumber);
const pswGenerated = (firstName + lastName + favColor + fixedNumber);

document.getElementById("psw-generated").innerHTML = pswGenerated;

const bonusNumber = fixedNumber + parseInt((age));
// document.getElementById("bonus-number").innerHTML = bonusNumber;

const pswBonus = (firstName + lastName + favColor + bonusNumber);
document.getElementById("psw-bonus").innerHTML = pswBonus;




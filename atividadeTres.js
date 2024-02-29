/*
3 – Converta a temperatura x (entrada manual) CELSIUS para
FAHRENHEIT, Segue a formula (°C × 9/5) + 32.
*/
var teclado = require("prompt-sync")();
var celcius = parseFloat(teclado("Digite a temperatura em C: "));
var fahrenheit = (celcius * (9 / 5)) + 32;
console.log("O valor da convers\u00E3o \u00E9: ".concat(fahrenheit));

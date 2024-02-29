/*
4 - Converta a temperatura x (entrada manual) FAHRENHEIT
para CELSIUS, Segue a formula 9/5 (°F - 32).

Nome:Pedro Otávio Camolesi
*/
var teclado = require("prompt-sync")();
var fahrenheit = parseFloat(teclado("Digite a temperatura em F: "));
var celcius = (5 / 9) * (fahrenheit - 32);
console.log("O valor da convers\u00E3o \u00E9: ".concat(celcius));

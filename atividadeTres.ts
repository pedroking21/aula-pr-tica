/*
3 – Converta a temperatura x (entrada manual) CELSIUS para
FAHRENHEIT, Segue a formula (°C × 9/5) + 32.
*/

let teclado = require (`prompt-sync`)();

let celcius: number = parseFloat(teclado(`Digite a temperatura em C: `));

let fahrenheit: number = (celcius * (9/5)) + 32;

console.log(`O valor da conversão é: ${fahrenheit}`);

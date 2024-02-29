/*
4 - Converta a temperatura x (entrada manual) FAHRENHEIT 
para CELSIUS, Segue a formula 9/5 (°F - 32).

Nome:Pedro Otávio Camolesi
*/

let teclado = require (`prompt-sync`)();

let fahrenheit : number = parseFloat(teclado(`Digite a temperatura em F: `));

let celcius: number = (5/9) * (fahrenheit - 32);

console.log(`O valor da conversão é: ${celcius}`);

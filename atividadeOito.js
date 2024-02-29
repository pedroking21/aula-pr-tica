var teclado = require("prompt-sync")();
var divisor = 2;
var dividendo = 20;
var resto = 0;
resto = dividendo % divisor;
if (resto == 0) {
    console.log("N\u00FAmero  digitado ".concat(dividendo, " \u00E9 par!"));
}
else if (resto == 1) {
    console.log("N\u00FAmero digitado ".concat(dividendo, " \u00E9 impar!!"));
}
else {
    console.log("Algo de errado!!");
}

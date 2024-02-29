const teclado = require (`prompt-sync`)(); // declaração teclado
/*Para receber os dados do teclado é necessário instalar os 
pacotes require prompt-sync
*/

let idade: number = parseFloat(teclado(`Digite sua idade: `))

if (idade >= 18){
    console.log(`Maior de idade!!`);
}
else{
    console.log(`Menor de idade`);
}

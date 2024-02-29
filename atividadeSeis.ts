const teclado = require (`prompt-sync`)();

let idade: number = 0;
let salario: number = 0;
let totPessoasNaCondicao: number = 0;
let pessoasContabilizadas: number = 1;

while (pessoasContabilizadas <= 4){

    idade = parseInt(teclado(`Digite a idade do funcionário: `));
    salario = parseFloat(teclado(`Digite o salario do funcionário: `));
    console.log(``);

    if (idade < 30 && salario > 3000){
        totPessoasNaCondicao++;
        pessoasContabilizadas++;
    }
    else{
        pessoasContabilizadas++;
   }
}
console.log(``);
console.log(`O total de pessoas que atende a condição é ${totPessoasNaCondicao}`);

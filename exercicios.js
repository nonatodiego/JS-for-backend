// Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.
let nome = 'Vasco';
let idade = 113; 
let estadio = true;

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof estadio);

// Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console
let primeiroNome = 'Vasco';
let ultimoNome = 'da Gama';
let anoFundacao = 1898;
let nomeCompleto = primeiroNome + ' ' + ultimoNome + ' '+ `${anoFundacao}`;

console.log(nomeCompleto);

// Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console.
let numero = 10;
let frase = 'é o dobro de 5';
let resultado = `${numero} ${frase}`;

console.log(resultado);

// Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.

let fallen = 'O maior sniper de CS:GO do Brasil';
fallen = 'O maior awper de CS:GO do Brasil';

console.log(fallen);

// Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloco e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.

var a = 'fora do bloco';
if (1 > 0) {
    var b = 'dentro do bloco';
    console.log(a);
    console.log(b);
}

console.log(a);


let c = 'fora do bloco';
if (1 > 0) {
    let d = 'dentro do bloco';
    console.log(c);
    console.log(d);
}
console.log(c);


let estaChovendo = true;

if (estaChovendo) {
    console.log('Vou levar um guarda-chuva');
} else {
    console.log('Vou sair de bermuda');
}
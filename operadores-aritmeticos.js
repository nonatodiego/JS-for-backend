const notaPrimeiroBimestre = 8;
const notaSegundoBimestre = 6.3;
const notaTerceiroBimestre = 7;
const notaQuartoBimestre =9.3;

let media = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4;

if(media >= 7){
    media += media * 0.1;
}

console.log('A media é ' + media.toFixed(1))// toFixed(1) para limitar as casas decimais;

const salarioMensal = 3500; 
const despesasFixas = 1200; 
const despesasVariaveis = 500; 
const economiasMensais = 800;
const bonusAnual = 3000;

const resultado = (salarioMensal - despesasFixas - despesasVariaveis) * 12 + (economiasMensais * 12) + bonusAnual;

console.log(resultado.toFixed(2)); // toFixed(2) para limitar as casas decimais;



let conta;
conta = 10 + 5 * 2 / 3 - 7 + 15 * 3 / 5 + 20 - 4 * 2;
console.log("O resultado da expressão é:", conta);

// OPERADOR DE INCREMENTO

/*

Julia está criando um programa para controlar o número de visitantes em um site. Para isso, ela está implementando um contador que registra a quantidade de visitas a cada vez que alguém acessa uma página específica.

O contador é representado pela variável contadorVisitas, inicializada com o valor zero. A cada visita à página, o contador deve ser incrementado em uma unidade.

Julia está considerando diferentes maneiras de realizar o incremento na variável contadorVisitas. Ela tentou as seguintes abordagens: 

*/


let contadorVisitas = 0; // inicializa o contador de visitas
contadorVisitas = contadorVisitas + 1; // contadorVisitas += 1;
contadorVisitas += 1; // contadorVisitas = contadorVisitas + 1;
contadorVisitas++; // contadorVisitas += 1;

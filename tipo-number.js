const notaPrimeiroBimestre = 8;
const notaSegundoBimestre = 6.3;
const notaTerceiroBimestre = -2;
const notaQuartoBimestre = Number.parseInt('5');

const total = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4;

console.log('A media é ' + total.toFixed(2))// toFixed(2) para limitar as casas decimais;
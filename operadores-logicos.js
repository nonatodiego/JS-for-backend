const notaFinal = 6;
const faltas = 5;
const advertencias = 0;


if (notaFinal < 7 && faltas > 4) {
    console.log('Reprovado por nota e por falta');
} else {
    console.log('Aprovado')
}

if(faltas >= 2 && !advertencias) {
    console.log('recebeu bônus por assiduidade')
} else{
    console.log('não recebeu bônus por assiduidade')
}
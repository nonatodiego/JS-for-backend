const estudanteReprovado = (notaFinal, faltas) => {
    if(notaFinal < 7 && faltas > 4) {
        return true;
    } else {
        return false;
    }
}

const exibeNome = nome =>  nome;



console.log(estudanteReprovado(6, 5)); // true
console.log(estudanteReprovado(10, 2)); // false
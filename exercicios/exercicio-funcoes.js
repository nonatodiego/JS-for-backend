// Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. Em seguida, chame a função e exiba a saudação no console.
function novoUsuario(nome) {
    return `Olá, ${nome}! Seja bem-vindo(a)`;
}
console.log(novoUsuario('Lucas')); // Olá, Lucas! Seja bem-vindo(a)

// Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.
function maiorIdade(idade) {
    if(idade >= 18) {
        return "Você é maior de idade";
    } else {
        return "Você é menor de idade";
    }
}

console.log(maiorIdade(20)); // Você é maior de idade

// Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.
function palindromo(palavra){
    let reverse = palavra.split('').reverse().join('');
    if(reverse === palavra){
        return 'É palíndromo';
    } else {
        return 'Não é palíndromo';
    }
}

console.log(palindromo('ana')); // É palíndromo

// Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console.
function oMaioral (a,b,c) {
    if(a > b && a > c) {
        return `o maior número é ${a}`;
    } else if (b > a && b > c) {
        return `o maior número é ${b}`
    } else {
        return `o maior número é ${c}`
    }
}

console.log (oMaioral(20,15,12))

// Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado

const calculaPotencia = (base,expoente) => {
    return base ** expoente
}

console.log(calculaPotencia(3,2))




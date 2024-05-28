// Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.
let frase = "A vida é bela";

console.log(frase.length,frase.toUpperCase());

// Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.
let variavelNull = null;
let variavelUndefined;

console.log(variavelNull, variavelUndefined);

// Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.

let number = 10;
let coutinho = "Coutinho";
let isVasco = true;

console.log(`${coutinho} é o novo camisa ${number} do Vasco? ${isVasco}!`);

// Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.
let numero = 10;
let texto = "100";

console.log(String(numero), Number(texto));

// Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.

let vasco = "gigante da colina";
console.log(vasco.toUpperCase())
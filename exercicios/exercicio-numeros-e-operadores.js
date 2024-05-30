// Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.
let saldo = 100;
let deposito = 50;
let saque = 20;

let operacao = saldo + deposito - saque;

console.log(operacao); // 130

// Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console.
valor = 15;

let resultado = valor % 2 === 0 ? 'É par' : 'É ímpar';

console.log(resultado); // É ímpar

// Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.

verifyUserAccess();

function verifyUserAccess() {
    const logado = true;
    const permissoes = false;

    if (logado && permissoes) {
        console.log('LOGADO');
    } else {
        console.log('DESLOGADO');
    }
}

// Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.
checkWeatherAndDecide();
function checkWeatherAndDecide() {
    let frio = true;
    let chovendo = false;

    if (frio || chovendo) {
        console.log('Vou ficar em casa');
    } else {
        console.log('Vou sair');
    }
}

// Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.

verifyUserAge();

function verifyUserAge() {
    const idadeMinima = 18;
    let idadeUsuario = 16;

    if (idadeUsuario >= idadeMinima) {
        console.log('Pode comprar');
    } else if (idadeUsuario < 0) {
        console.log('Idade inválida');
    } else {
        console.log('Não pode comprar');
    }
}


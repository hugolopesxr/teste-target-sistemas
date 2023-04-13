// cria a variavel que irá servir de modelo para teste da sequência de Fibonacci
const num = 89;

// váriavel que inicia os 2 primeiros numeros da sequência de Fibonacci respectivamente
let a = 0, b = 1;

// flag para identificar se o numero pertence realmente a sequência de Fibonacci
let pertence = false;

// condicional de loop para poder encontrar um numero maior ou igual ao setado na variavel num.
while (b <= num) {
    // vai verificar se o numero informado é igual ao atual da sequência
    if (b === num) {
        pertence = true;
        break;
    }
    
    // vai atualizar os valores de a e b para os proximos numeros da sequência usando um destructuring.
    [a, b] = [b, a + b];
}

// aqui é criado um array com a sequência de Fibonacci
const fibonacci = [0, 1];
while (fibonacci[fibonacci.length - 1] < num) {
    fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
}

//vai imprimir se o numéro pertence a sequência de Fibonacci ou não.
console.log(`Sequência de Fibonacci: ${fibonacci.slice(0, -1)}`);
if (pertence) {
    console.log(`${num} pertence à sequência de Fibonacci`);
} else {
    console.log(`${num} não pertence à sequência de Fibonacci`);
}

// Caso queira verificar a funcionalidade do código é só modificar o valor da variavel num.
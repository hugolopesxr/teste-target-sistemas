const nome = "Walter"

// trnasformando a string em um array
const stringEmArray = nome.split("");

let stringInvertida = "";
let stringEmArrayInvertido = [];

for (let i = stringEmArray.length - 1; i >= 0; i--) {
    stringEmArrayInvertido.push(stringEmArray[i]);
}

stringInvertida = stringEmArrayInvertido.toString().replaceAll(",", "");
console.log(stringInvertida)
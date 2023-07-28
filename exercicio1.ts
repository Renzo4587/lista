const entrada1 = require("readline-sync");

let n : number = parseFloat(entrada1.question("digite um numero: "))

for (let i = 0; i <= n; i+=2) {
    console.log(i);
}
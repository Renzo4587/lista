const entrada3 = require("readline-sync");
let tabuada: number = parseInt(entrada3.question("digite o numero :"));

for (let i = 1; i <= 10; i++){
    console.log(i*tabuada)
}
let valor = parseInt(prompt("Insira um número inteiro: "));

while(isNaN(valor)){
    alert("Valor inválido, insira um valor válido!");
    valor = parseInt(prompt("Insira um número inteiro: "))
}

let palavra = "";

if(valor%3 == 0) palavra += "fizz";

if(valor%5 == 0) palavra += "buzz";

console.log(palavra);
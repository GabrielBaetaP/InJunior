let n = parseInt(prompt("Insira um número inteiro positivo: "));

while(isNaN(n)){
    alert("Valor inválido, insira um valor válido!");
    n = parseInt(prompt("Insira um número inteiro: "));
}

const fibonacci = [0, 1];

for(let i = 2; i < n; i++){
    fibonacci.push(fibonacci[i-1] + fibonacci[i - 2]);
}

for(let i = 0; i < n; i++){
    console.log(`Fibonacci(${i}) = ${fibonacci[i]}`);
}

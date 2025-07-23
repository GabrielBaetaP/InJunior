let n = parseInt(prompt("Insira um número inteiro positivo: "));

while(isNaN(n)){
    alert("Valor inválido, insira um valor válido!");
    n = parseInt(prompt("Insira um número inteiro: "));
}

let i = 0;

let fibonacci = [0, 1];

function calc_fibonacci(fibonacci, n){
    if(fibonacci.length >= n){
        return fibonacci;
    }
    
    fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);

    return calc_fibonacci(fibonacci, n);
}

fibonacci = calc_fibonacci(fibonacci, n);

for(let i = 0; i < n; i++){
    console.log(`Fibonacci(${i}) = ${fibonacci[i]}`);
}

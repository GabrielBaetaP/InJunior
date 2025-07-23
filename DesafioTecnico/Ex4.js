function conversor(real, moeda){   
    return (real / moeda).toFixed(2);
}

const real = parseFloat(prompt("Insira o valor em reais: "));

const euro = 6.10;

const dolar = 5.70;

console.log(`O valor de ${real} em reais equivalem a ${conversor(real, euro)} euros.`);
console.log(`O valor de ${real} em reais equivalem a ${conversor(real, dolar)} dólares.`);

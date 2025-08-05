function retornarElemento<T>(array: T[], index: number): T | undefined {
    return array[index];
}

const numeros = [10, 20, 30];
console.log(retornarElemento(numeros, 1)); 

const letras = ["a", "b", "c"];
console.log(retornarElemento(letras, 0)); 
function encontrarElementoUnico(lista){
    return lista.reduce((numeros, numeroAtual) => numeros ^ numeroAtual, 0);
}

const vet = [1,2,1,5,6,6,8,2,3,8,5];

console.log(encontrarElementoUnico(vet));
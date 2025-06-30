let str = prompt("Insira uma palavra/frase: ");

function juntar_nome(nome){
    nome = nome.trim();
    nome = nome.split(" ");
    nome = nome.join("");
    nome = nome.toLowerCase();
    return nome;
}

function palindromo1(nome){
    const valor = nome.length / 2;
    let final = nome.length - 1;
    for(let i = 0; i < valor; i++){
        if(nome[i] != nome[final]){
            console.log("Não é palíndromo!");
            return;
        }
        final--;
    }
    console.log("É palíndromo!");
}

function palindromo2(nome){
    const aux = nome.split("").reverse().join("");
    if(aux === nome){
        console.log("É palíndromo!");
        return;
    }
    console.log("Não é palíndromo!");
}

// 1 teste
palindromo1(juntar_nome(str));

//2 teste
palindromo2(juntar_nome(str));





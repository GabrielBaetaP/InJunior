function verificaIdades(anos, ano_atual){

    const vetor = [];

    for(const ano of anos){
        if(ano < (ano_atual - 17)) vetor.push("maior");
        else vetor.push("menor");
    }

    return vetor;
}

function preencher_anos(ano_atual){
    
    const vetor = [];

    for(let i = 0; i < 10; i++){
        vetor.push(ano_atual - 99 + Math.floor(Math.random() * 100));
    }

    return vetor;
}

const ano_atual = parseInt(prompt("Insira o ano atual: "));

const anos = preencher_anos(ano_atual);

const mai_men = verificaIdades(anos, ano_atual);

console.log(anos);

mai_men.forEach((classificador, i) => {
    console.log(`Pessoa ${i + 1} é ${classificador}.`);
});


let qtd_ite = parseInt(prompt("Insira a quantidade de números que deseja inserir no vetor: "));
while(isNaN(qtd_ite) || qtd_ite < 0){
    alert("Número inválido.");
    qtd_ite = parseInt(prompt("Insira a quantidade de números que deseja inserir no vetor: "));
}
const vet = [];

for(let i = 0; i < qtd_ite; i++){
    vet.push(parseInt(prompt(`Insira o ${i + 1}º valor: `)));
}

let qtd_cre = 0;

for(let i = 1; i < qtd_ite; i++){
    if(vet[i] > vet[i-1]) qtd_cre++;
}

console.log(qtd_cre);

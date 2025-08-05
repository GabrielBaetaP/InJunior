type Genero = "masculino" | "feminino";

interface Pessoa {
    nome: string;
    idade: number;
    genero: Genero;
}

function apresentarPessoa(pessoa: Pessoa): string {
    return `${pessoa.nome} tem ${pessoa.idade} anos e se identifica como ${pessoa.genero}.`;
}

const camille: Pessoa = {
    nome: "Camille",
    idade: 20,
    genero: "feminino",
};

console.log(apresentarPessoa(camille));
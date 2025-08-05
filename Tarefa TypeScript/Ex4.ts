interface Usuario {
    nome: string;
    email: string;
    exibirInfo(): string;
}

const gabriel: Usuario = {
    nome: "Gabriel",
    email: "gabrielbaeta@id.uff.br",
    exibirInfo() {
        return `Nome: ${this.nome} - Email: ${this.email}`;
    },
};

console.log(gabriel.exibirInfo());
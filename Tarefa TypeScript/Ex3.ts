interface Livro {
    titulo: string;
    autor: string;
     ano: number;
}

function resumirLivro(livro: Livro): string {
    return `O livro '${livro.titulo}' foi escrito por ${livro.autor} em ${livro.ano}.`;
}

const livro: Livro = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    ano: 1899,
};

console.log(resumirLivro(livro));
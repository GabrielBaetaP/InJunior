interface RespostaAPI<T> {
    dados: T;
    sucesso: boolean;
}

const resposta1: RespostaAPI<string> = {
    dados: "OK",
    sucesso: true,
};

const resposta2: RespostaAPI<number[]> = {
    dados: [1, 2, 3],
    sucesso: false,
};

console.log(resposta1);
console.log(resposta2);
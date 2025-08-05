type StatusRequisicao = "sucesso" | "erro" | "carregando";

function mostrarMensagemStatus(status: StatusRequisicao): string {
    switch (status) {
        case "sucesso":
        return "Dados carregados com sucesso!";
        case "erro":
        return "Ocorreu um erro ao carregar os dados.";
        case "carregando":
        return "Aguarde... Carregando os dados.";
  }
}

console.log(mostrarMensagemStatus("carregando"));
console.log(mostrarMensagemStatus("sucesso"));
console.log(mostrarMensagemStatus("erro"));
let clientes = [];
let continuar = true;

while(continuar){
    let fila = "";
    if(clientes.length === 0){
        fila = "Fila vazia.";
    }
    else {
        clientes.forEach((cliente, i) => {
            fila += `${i + 1}º - ${cliente}\n`;
        });
    }   

    const option = prompt(
        `===Central de Atendimento ao Cliente===\n` +
        `Fila de Clientes: \n` +
        `${fila}\n` +
        `============================\n ` +
        `Escolha uma opção: \n` +
        `1- Novo Cliente\n` + 
        `2- Atender Cliente\n` + 
        `3- Sair`
    );

    switch(option){
        case '1':
            const novo_cliente = prompt("Insira o nome do cliente: ");
            if(novo_cliente){
                clientes.push(novo_cliente);
                alert("Cliente entrou na fila de espera.");
            }
            break;
        case '2':
            if(clientes.length > 0){
                clientes.shift();
                alert("Cliente Atendido.");
            }
            else {
                alert("Não há clientes para antender");
            }
            break;
        case '3':
            alert("Fim do programa.");
            continuar = false;
            break;
        default:
            if(option != null){
                alert("Opção Inválida.");
            }
            else {
                alert("Fim do programa.");
                continuar = false;
            }
    }

}

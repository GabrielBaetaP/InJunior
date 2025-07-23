let time = [];
let continuar = true;

function adicionarJogador(){
    const novo_nome = prompt("Insira o nome do jogador: ");
    const nova_idade = parseInt(prompt("Insira a idade do jogador: "));
    const nova_posicao = prompt("Insira a posição do jogador: ");
    const nova_pontuacao = parseInt(prompt("Insira a pontuação do jogador: "));
    if(!novo_nome || isNaN(nova_idade) || !nova_posicao || isNaN(nova_pontuacao)){
        alert("Dados inválidos, o jogador não foi adicionado.");
        return;
    }
    const novoJogador = {
        nome: novo_nome,
        idade: nova_idade,
        posicao: nova_posicao,
        pontuacao: nova_pontuacao
    };
    time.push(novoJogador);
}

function buscarPorPosicao(pos, time){
    let time_pos = [];
    for(const jogador of time){
        if(jogador.posicao == pos) time_pos.push(jogador);
    }
    return time_pos;
}

function listarTime(time){
    console.log(`Os jogadores que jogam no time são: `);
    for(jogador of time){
        console.log(`${jogador.nome}`);
    }
}

function calcularPontuacaoMedia(time){
    let soma = 0;
    for(jogador of time){
        soma += jogador.pontuacao; 
    }
    return soma / time.length;
}

while(continuar){
    
    const option = prompt(
        `===Gerenciamenento de time===\n` +
        `Escolha uma opção: \n` +
        `1- Adicionar jogador\n` + 
        `2- Buscar por posição\n` + 
        `3- Listar time\n` +
        `4- Calcular pontuação média\n` +
        `5- Sair`  
    );

    switch(option){
        case '1':
            adicionarJogador();
            break;
        case '2':
            pos = prompt("Insira a posição: ");
            time_pos = buscarPorPosicao(pos, time);
            if(time_pos.length > 0){
                console.log(`Os jogadores que atuam como ${pos} são: `);
                for(jogador of time_pos){
                    console.log(`${jogador.nome}`);
                }
            }
            else{
                alert("Não há nenhum jogador cadastrado nessa posição");
            }
            break;
        case '3':
            if(time.length > 0) listarTime(time);
            else{
                alert("Não há nenhum jogador cadastrado no time");
            }
            break;
        case '4':
            if(time.length > 0){
                const media = Math.round(calcularPontuacaoMedia(time));
                alert(`A média da pontuação dos jogadores no time é ${media}`);
            }
            else{
                alert("Não há nenhum jogador cadastrado no time");
            }
            break;
        case '5':
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

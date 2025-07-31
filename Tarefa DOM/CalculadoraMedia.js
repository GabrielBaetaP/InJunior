
let i = 1;
let nota = 0;

function adicionarNota(){
    let input = document.querySelector(".barra");
    if(input.value === ""){
        alert("Por favor, insira uma nota");
        return;
    }

    let valor = input.value.replace(",", ".");
    valor = parseFloat(valor);

    if(isNaN(valor)){
        alert("A nota digitada é inválida, por favor, insira uma nota válida");
        return;
    }
    if(valor < 0 || valor > 10){
        alert("A nota digitada é inválida, por favor, insira uma nota válida.");
        return;
    }

    // let escopo = document.createElement("div");
    // let mensagem = document.createElement("p");
    // mensagem.innerText = "A nota " + i + " foi " + input.value;
    // escopo.append(mensagem);
    // let secao = document.querySelector(".notas");
    // secao.append(escopo);

    let display = document.querySelector("#display");
    let mensagem = "A nota " + i + " foi " + valor + "\n";
    display.value += mensagem;
    nota += valor
    i++;
    input.value = "";
}

function calcularMedia(){
    let secao = document.querySelector(".resultado");
    if(i-1 === 0){
        alert("Não há números para ser calculado, insira uma nota.");
        return;
    }
    let result = nota/(i-1);
    secao.innerText = result.toFixed(2);
}

let btn_adicionar = document.querySelector("#adicionar");
btn_adicionar.addEventListener('click', adicionarNota);
let input = document.querySelector(".barra");
input.addEventListener('keyup', (event)=>{
    if(event.key === "Enter"){
        adicionarNota();
    }
})

let btn_calcular = document.querySelector("#calcular");
btn_calcular.addEventListener('click', calcularMedia);

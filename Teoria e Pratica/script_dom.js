// getElementById
// let secao1 = document.getElementById("secao_de_texto1");
// console.log(secao1);

// let paragrafo = document.getElementById("paragrafo");
// console.log(paragrafo);

// getElementsByClassName
// let paragrafos = document.getElementsByClassName("paragrafo");
// console.log(paragrafos);

// querySelector
// let secao = document.querySelector("#secao_de_texto1");
// console.log(secao);

// let paragrafos1 = document.querySelector(".paragrafo");
// console.log(paragrafos1);

// querySelectorAll

// let paragrafos2 = document.querySelectorAll(".paragrafo");
// console.log(paragrafos2);

// let secao = document.querySelector(".secao")

// innerHTML

// console.log(secao)
// console.log(secao.innerHTML)

// secao.innerHTML = "<a class='subtitulo'>Novo Subtitulo</a>"

// console.log(secao.innerHTML)

// innerText

// let subtitulo = document.querySelector(".subtitulo");
// console.log(subtitulo.innerText);

// subtitulo.innerText = "Título"

// textContent

// subtitulo.href = "https://www.google.com";
// subtitulo.style.color = "red";

// let botao = document.querySelector(".buttom")

// addEventListener
// botao.addEventListener("click",()=>{
//     console.log("Clicou")
// })

// let text = document.querySelector(".text");

// text.addEventListener("mouseenter", ()=>{
//     text.innerText = "Entrou";
// })

// text.addEventListener("mouseleave", ()=>{
//     text.innerText = "Saiu";
// })

// let paragrafo = document.querySelector(".text");
// let secao = document.querySelector(".section");

// parentElement

// console.log(paragrafo.parentElement)

// parentNode

// console.log(paragrafo.parentNode);

// firstElementChiild

// console.log(secao.firstElementChild);

// firstChild

// console.log(secao.firstChild);

// lastElementChild

// console.log(secao.lastElementChild)

// children

// console.log(secao.children)

//createElement

// let input = document.querySelector(".input_mensagens");

// function enviar_mensagem(){
//     let input = document.querySelector(".input_mensagens");
//     let escopo = document.createElement("div");
//     let texto = document.createElement("p");
//     texto.innerText = input.value;
//     escopo.append(texto);
//     let secao = document.querySelector(".section_mensagens");
//     secao.append(escopo);
// }

// function limpar_mensagem(){
//     secao.innerHTML = "";
// }

// let btn_enviar = document.querySelector("#btn_enviar");
// btn_enviar.addEventListener('click', enviar_mensagem);
// input.addEventListener('keyup', (event) => {
//     if(event.key === 'Enter'){
//         enviar_mensagem();
//     }
// })

// let btn_limpar = document.querySelector("#btn_limpar");
// btn_limpar.addEventListener('click', limpar_mensagem);

let section = document.querySelector(".section");
let div = document.createElement("div");
section.append(div);

//add

div.classList.add("box");
div.classList.add("accept");

//remove

div.classList.remove("accept");

//contain

console.log(div.classList.contains("box"));
console.log(div.classList.contains("accept"));

//toggle
div.classList.toggle("accept");

//replace
div.classList.replace("accept", "error")
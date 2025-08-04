async function insereProduto() {

    let nome = document.querySelector("#nome");
    let preco = document.querySelector("#preco");
    preco.value = preco.value.replace(",", ".");
    let imagem = document.querySelector("#image");
    let descricao = document.querySelector("#descricao");
    let categoria = document.querySelector("#categoria");
    let avaliacao = document.querySelector("#avaliacao");
    avaliacao.value.replace(",", ".");
    let novo = {};

    if (nome.value.trim() == "" || preco.value.trim() == "" || imagem.value.trim() == "" || descricao.value.trim() == "" ||  categoria.value.trim() == "" || avaliacao.value.trim() == ""){
        alert("Todos os campos devem ser preenchidos com informações.")
        return
    }

    try {
        new URL(imagem.value);
    } catch (e) {
        alert("O link da imagem não é válido");
        return;
    }

    let precoValor = Number(preco.value);
    if (isNaN(precoValor) || precoValor <= 0){
        alert("O preço deve ser um número maior do que 0!");
        return;
    }

    let avaliacaoValor = Number(avaliacao.value);
    if(isNaN(avaliacaoValor) || avaliacaoValor > 5 || avaliacaoValor < 0){
        alert("O número de avaliação deve ser positivo e estar contido entre 0 e 5");
        return;
    }

    //Inserindo as infos corretas
    novo.name = nome.value;
    novo.image = imagem.value;
    novo.description = descricao.value;
    novo.price = precoValor;
    novo.category = categoria.value;
    novo.inStock = true; 
    novo.rating = avaliacaoValor;

    let url = `http://localhost:3000/products`;

    try {
        let resposta = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(novo),
            }
        );

        if (!resposta.ok) {
            throw new Error(`Erro na API: ${resposta.status}`);
        }
        
        await resposta.json();
        
        window.location.href="index.html";
        alert("Produto adicionado com êxito.");

    } catch(err) {
        console.error("Erro ao inserir produto:", err);
        alert(`Falha ao adicionar o produto. Erro: ${err.message}`);
    }
}


let botao = document.querySelector("#criar");
botao.addEventListener("click", insereProduto);
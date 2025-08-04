
async function infos(id) {
    try {
        let url = `http://localhost:3000/products/${id}`;
        let resposta = await fetch(url);
        let produto = await resposta.json();

        let nome = document.querySelector("#Nome");
        let preco = document.querySelector("#Preco");
        preco.value = preco.value.replace(",", ".");
        let imagem = document.querySelector("#Imagem");
        let categoria = document.querySelector("#Categorias");
        let descricao = document.querySelector("#Descricao");
        let avaliacao = document.querySelector("#Avaliacao");
        avaliacao.value.replace(",", ".");

        nome.placeholder = produto.name;
        imagem.placeholder = produto.image;
        descricao.placeholder = produto.description;
        preco.placeholder = `R$ ${produto.price}`;
        categoria.placeholder = produto.category;
        avaliacao.placeholder = produto.rating;
    } catch (err) {
        console.error("Erro ao buscar informações do produto:", err);
        alert("Não foi possível carregar os dados do produto.");
    }
}


async function edit_produto(id) {
    let nome = document.querySelector("#Nome");
    let preco = document.querySelector("#Preco");
    preco.value = preco.value.replace(",", ".");
    let imagem = document.querySelector("#Imagem");
    let categoria = document.querySelector("#Categorias");
    let descricao = document.querySelector("#Descricao");
    let avaliacao = document.querySelector("#Avaliacao");
    avaliacao.value.replace(",", ".");

    let novo = {};

    if (nome.value.trim() == "" && imagem.value.trim() == "" && descricao.value.trim() == "" && preco.value.trim() == "" && categoria.value.trim() == "" && avaliacao.value.trim() == "") {
        alert("Pelo menos um campo deve ser alterado para editar.");
        return;
    }

    if (nome.value.trim() !== "") {
        novo.name = nome.value;
    }

    if (imagem.value.trim() !== "") {
        try {
            new URL(imagem.value);
            novo.image = imagem.value;
        } catch (e) {
            alert("O link da imagem não é válido");
            return;
        }
    }

    if (descricao.value.trim() !== "") {
        novo.description = descricao.value;
    }


    if (preco.value.trim() !== "") {
        const precoNum = Number(preco.value);
        if (isNaN(precoNum) || precoNum < 0) {
            alert("O preço deve ser um número maior do que 0!");
            return;
        }
        novo.price = precoNum;
    }

    if (categoria.value.trim() !== "") {
        novo.category = categoria.value;
    }

    if (avaliacao.value.trim() !== "") {
        const avaliacaoNum = Number(avaliacao.value);
        if (isNaN(avaliacaoNum) || avaliacaoNum < 0 || avaliacaoNum > 5) {
            alert("O número de avaliação deve ser positivo e estar contido entre 0 e 5");
            return;
        }
        novo.rating = avaliacaoNum;
    }

    let url = `http://localhost:3000/products/${id}`;

    try {
        let resposta = await fetch(url, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(novo),
        });

        if (!resposta.ok) {
            throw new Error(`Erro na API: ${resposta.status}`);
        }

        window.location.href = "index.html";
        alert("Produto alterado com êxito.");

    } catch (err) {
        console.error("Erro ao editar produto:", err);
        alert("Falha ao editar o produto.");
    }
}

const params = new URLSearchParams(window.location.search);
const idcamisa = parseInt(params.get("id"));


if (idcamisa) {
    infos(idcamisa);

    let botao = document.querySelector("#criar");
    botao.addEventListener("click", function (event) {
        event.preventDefault();
        edit_produto(idcamisa);
    });
}
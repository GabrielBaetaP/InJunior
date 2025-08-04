
const section = document.querySelector('.produto');


async function getProdutos(limit, page) {

    section.innerHTML = '';
    let url = `http://localhost:3000/products?_limit=${limit}&_page=${page}`;

    try {
        let resposta = await fetch(url);
        if (!resposta.ok) {
            throw new Error(`Erro na requisição: ${resposta.status}`);
        }
        let produtos = await resposta.json();
        let qtd = resposta.headers.get("x-total-count");

        infos(produtos);
        paginacao(qtd, page);

    } catch (err) {
        console.error("Falha ao buscar produtos:", err);
        section.innerHTML = '<p>Erro ao carregar produtos. Verifique se a API está rodando e tente novamente.</p>';
    }
}

async function delProduto(id) {
    let url = `http://localhost:3000/products/${id}`;

    try {
        await fetch(url, {
            method: "DELETE",
        });
        alert("Produto deletado com sucesso!");
        location.reload();
    } catch (err) {
        console.error("Erro ao deletar produto:", err);
        alert("Falha ao deletar o produto.");
    }
}

function infos(produtos) {
    produtos.forEach(produto => {
        const cardDoProduto = document.createElement('div');
        cardDoProduto.className = 'card-produto'; 

        cardDoProduto.innerHTML = `
            <div class="card">
                <div class="parte-imagem">
                    <div class="cima">
                        <p class="rating">${produto.rating.toFixed(1)} <img src="./assets/estrela.png"></p>
                        <div class="botoes">
                            <button type="button" class="btn-remover" id="${produto.id}">
                                <img src="./assets/remover.png">
                            </button>
                            <button type="button" class="btn-editar" id="${produto.id}">
                                <img src="./assets/editar.png">
                            </button>
                        </div>
                    </div>
                    <img class="imagem" src="${produto.image}">
                </div>
            
                <div class="informacoes">
                    <p class="titulo">${produto.name}</p>
                    <p class="categoria">${produto.category}</p>
                    <p class="descricao">${produto.description}</p>
                    <p class="preco">R$ ${Number(produto.price).toFixed(2).replace('.', ',')}</p>
                </div>
            </div>
        `;

        section.appendChild(cardDoProduto);
    });

    document.querySelectorAll('.btn-remover').forEach(botao => {
        botao.addEventListener('click', function() {
            const id = this.getAttribute('id');
            if (confirm("Tem certeza de que deseja deletar este produto?")) {
                delProduto(id);
            }
        });
    });

    document.querySelectorAll('.btn-editar').forEach(botao => {
        botao.addEventListener('click', function() {
            const id = this.getAttribute("id");
            window.location.href = "PagEditar.html?id=" + id; 
        });
    });
}

function paginacao(total, pageAtual) {
    const containerPaginacao = document.createElement('div');
    containerPaginacao.className = 'btn-paginacao';

    let limit = 12;
    const totalPaginas = Math.ceil(total / limit);

    for (let i = 1; i <= totalPaginas; i++) {
        if (i === pageAtual) {
            containerPaginacao.innerHTML += `<button class="num-pag-atual" id="${i}">${i}</button>`;
        } else {
            containerPaginacao.innerHTML += `<button class="num-pag" id="${i}">${i}</button>`;
        }
    }

    section.appendChild(containerPaginacao);

    document.querySelectorAll('.num-pag').forEach(botao => {
        botao.addEventListener('click', function() {
            let page = Number(this.getAttribute('id'));
            getProdutos(limit, page);
        });
    });
}

getProdutos(12, 1);
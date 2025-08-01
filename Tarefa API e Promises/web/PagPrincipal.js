let containerDeProdutos = document.querySelector('.produto');

const apiUrl = 'http://localhost:3000/products';

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        return response.json();
    })
    .then(produtos => {
        produtos.forEach(produto => {
            const cardDoProduto = document.createElement('div');
            cardDoProduto.className = 'card-produto';

            cardDoProduto.innerHTML =`
            <div class="card">
                <div class="parte-imagem">
                    <div class="cima">
                        <p class="rating">${produto.rating.toFixed(1)} <img src="./assets/estrela.png"></p>
                        <div class="botoes">
                            <button id="btn-remover"><img src="./assets/remover.png"></button>
                            <button id="btn-editar"><img src="./assets/editar.png"></button>
                        </div>
                    </div>
                    <img src="https://acdn-us.mitiendanube.com/stores/001/409/577/products/camisa-reserva-flamengo-adidas-branco-2022-2023-kit-2-crf-torcedor-masculino-11-8fc7ec252f417b940416553866558140-640-0.jpg"">
                </div>
            
                <div class="informacoes">
                    <p class="titulo">${produto.name}</p>
                    <p class="categoria">${produto.category}</p>
                    <p class="descricao">${produto.description}</p>
                    <p class="preco">R$ ${produto.price.toFixed(2).replace('.', ',')}</p>
                </div>
            </div>
            `;

            containerDeProdutos.appendChild(cardDoProduto);
        });
    })
    .catch(error => {
        console.error('Falha ao buscar produtos:', error);
        containerDeProdutos.innerHTML = '<p>Erro ao carregar produtos. Verifique se a API está rodando (npm run start-api) e tente novamente.</p>';
    });
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

            const imagem = document.createElement('img');
            imagem.src = 'https://acdn-us.mitiendanube.com/stores/001/409/577/products/camisa-reserva-flamengo-adidas-branco-2022-2023-kit-2-crf-torcedor-masculino-11-8fc7ec252f417b940416553866558140-640-0.jpg';

            const informacoes = document.createElement('div');
            informacoes.className = 'informacoes';

            const nome = document.createElement('p');
            nome.className = 'titulo';
            nome.textContent = produto.name;

            const categoria = document.createElement('p');
            categoria.className = 'categoria';
            categoria.textContent = produto.category;

            const descricao = document.createElement('p');
            descricao.className = 'descricao';
            descricao.textContent = produto.description; 

            const preco = document.createElement('p');
            preco.className = 'preco';
            preco.textContent = `R$ ${produto.price.toFixed(2).replace('.', ',')}`;

            informacoes.appendChild(nome);
            informacoes.appendChild(categoria);
            informacoes.appendChild(descricao);
            informacoes.appendChild(preco);
            
            cardDoProduto.appendChild(imagem);
            cardDoProduto.appendChild(informacoes);

            containerDeProdutos.appendChild(cardDoProduto);
        });
    })
    .catch(error => {
        console.error('Falha ao buscar produtos:', error);
        containerDeProdutos.innerHTML = '<p>Erro ao carregar produtos. Verifique se a API está rodando (npm run start-api) e tente novamente.</p>';
    });
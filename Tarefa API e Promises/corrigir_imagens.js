const fs = require('fs');

const dbPath = './products.json';

const nova_img = 'https://acdn-us.mitiendanube.com/stores/001/409/577/products/camisa-reserva-flamengo-adidas-branco-2022-2023-kit-2-crf-torcedor-masculino-11-8fc7ec252f417b940416553866558140-640-0.jpg';

const img_quebrada = 'https://via.placeholder.com/';

try {  
    const dbRaw = fs.readFileSync(dbPath, 'utf-8');
    const db = JSON.parse(dbRaw);

    if (!db.products) {
        throw new Error(`O arquivo ${dbPath} não contém a chave 'products'.`);
    }

    let contadorDeModificacoes = 0;

    db.products.forEach(produto => {
        if (produto.image && produto.image.startsWith(img_quebrada)) {
            console.log(`- Atualizando imagem do produto: "${produto.name}" (ID: ${produto.id})`);
            produto.image = nova_img; 
            contadorDeModificacoes++;
        }
    });

    if (contadorDeModificacoes > 0) {
        fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
        console.log(`\nOperação concluída! ${contadorDeModificacoes} imagens foram atualizadas com sucesso.`);
    } else {
        console.log('\nNenhuma imagem com o padrão quebrado foi encontrada para atualizar.');
    }

} catch (error) {
    console.error('\nOcorreu um erro ao processar o arquivo:', error.message);
}
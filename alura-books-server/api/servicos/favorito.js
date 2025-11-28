const fs = require ("fs");
const path = require("path");
const caminhoFavoritos = path.join(__dirname, '..', 'favoritos.json');
const caminhoLivros = path.join(__dirname, '..', 'livros.json');


function getTodosFavoritos() {
 return JSON.parse( fs.readFileSync(caminhoFavoritos, 'utf8') );
}

function deletaFavoritoPorId(id) {
    const favoritos = JSON.parse( fs.readFileSync(caminhoFavoritos, 'utf8') );

    const idString = String(id);

    const favoritosFiltrados = favoritos.filter( favorito => favorito.id !== idString)
    fs.writeFileSync(caminhoFavoritos, JSON.stringify(favoritosFiltrados));
}

function insereFavorito(id) {
    try {
        // 1. LÊ OS ARQUIVOS
        const livros = JSON.parse(fs.readFileSync(caminhoLivros, 'utf8')); 
        const favoritos = JSON.parse(fs.readFileSync(caminhoFavoritos, 'utf8'));
        
        // 2. BUSCA O LIVRO
        const idString = String(id);
        const livroInserido = livros.find(livro => livro.id === idString);

        // 3. INSERE E GRAVA
        if (livroInserido) {
            const favoritosAtualizados = [...favoritos, livroInserido];
            fs.writeFileSync(caminhoFavoritos, JSON.stringify(favoritosAtualizados));
        }
    } catch (error) {
        // Se qualquer coisa falhar (leitura, escrita, ou busca), 
        // lança o erro para o controlador Express tratar com 500.
        // Isso força o Express a enviar o erro de volta para o cliente.
        console.error("Erro fatal na função insereFavorito:", error);
        throw error; 
    }
}

module.exports = {
    getTodosFavoritos,
    deletaFavoritoPorId,
    insereFavorito,
};
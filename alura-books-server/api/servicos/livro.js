const fs = require ("fs")
const path = require("path");
const caminhoLivros = path.join(__dirname, '..', 'livros.json');

function getTodosLivros() {
 return JSON.parse(fs.readFileSync(caminhoLivros, 'utf8'))
}

function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync(caminhoLivros, 'utf8'));

    const livroFiltrado = livros.find( livro => livro.id ===id)
    
   return livroFiltrado || null
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync(caminhoLivros, 'utf8'));

    const novoLivro = {
        id: String(livroNovo.id),
        nome: livroNovo.nome 
    };

    const novaListaDeLivros = [...livros, novoLivro]
    fs.writeFileSync(caminhoLivros, JSON.stringify(novaListaDeLivros))
}

function modificaLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync(caminhoLivros, 'utf8'));
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id ===id);
     if (indiceModificado === -1) {
    throw new Error("Livro não encontrado")
  }

    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes};
    // livrosAtuais [indiceModificado] -> {id: "2", nome: "livro irado"}
    // modificacoes -> {nome: "nome mucho legal"}

    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync(caminhoLivros, JSON.stringify(livrosAtuais));
}

function deleteLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync(caminhoLivros, 'utf8'));

    const livrosFiltrados = livros.filter(livro => livro.id!== id);
    fs.writeFileSync(caminhoLivros, JSON.stringify(livrosFiltrados));
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deleteLivroPorId
}
const { Router } = require ("express")
const { getLivros, getLivro, postLivro, patchLivro, deleteLivro} = require ("../controladores/livro")
const { deleteFavorito } = require("../controladores/favorito")

const router = Router ()

router.get("/", getLivros)

router.get("/", getLivro)

router.post("/:id", postLivro)

router.patch("/:id", patchLivro)

router.delete("/:id", deleteLivro);

module.exports = router
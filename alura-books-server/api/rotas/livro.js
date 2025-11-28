const { Router } = require ("express")
const { getLivros, getLivro, postLivro, patchLivro, deleteLivro} = require ("../controladores/livro")
const { deleteFavorito } = require("../controladores/favorito")

const router = Router ()

router.get("/", getLivros)

router.get("/:id", getLivro)

router.post("/", postLivro)

router.patch("/:id", patchLivro)

router.delete("/:id", deleteLivro);

router.delete("/:id", deleteFavorito);

module.exports = router
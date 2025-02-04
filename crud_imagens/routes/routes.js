const express = require("express");
const imagemController = require("../Controller/imagemController");

const router = express.Router();

router.post("/imagem/adicionar", imagemController.adicionarImagem);
router.get("/imagem/listar", imagemController.getAllImagens);
router.get("/imagem/listarPorId/:id", imagemController.getImageById);
router.put("/imagem/atualizar/:id", imagemController.atualizarImagem);
router.delete("/imagem/deletar/:id", imagemController.deletarImagem);

module.exports = router;
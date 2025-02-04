const express = require("express");
const usuarioController = require("../Controller/usuarioController");

const router = express.Router();

router.post("/usuario/adicionar", usuarioController.adicionarUsuario);
router.get("/usuario/listar", usuarioController.getAllUsuarios);
router.get("/usuario/listarPorId/:id", usuarioController.getUsuarioById);
router.put("/usuario/atualizar/:id", usuarioController.atualizarUsuario);
router.delete("/usuario/deletar/:id", usuarioController.deletarUsuario);

module.exports = router;
const express = require("express");
const awsController = require("../Controller/awsController");
const userController = require("../Controller/UsuarioController");

const router = express.Router();

//Users
router.post("/user/adicionar", userController.adicionarUsuario);
router.get("/user/listarTodos", userController.getAllUsers);

//Imagens
router.post("/image/adicionar", awsController.addImage);
router.get("/image/listarTodas", awsController.getAllImages);
router.get("/image/listarImagem", awsController.downloadFile);

module.exports = router;

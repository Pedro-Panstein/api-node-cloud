const schema = require("../createTables");
schema.createSchema();

const express = require("express");
const bodyParser = require("body-parser");
const db = require("../Repository/dbRepository");
const ImagemController = require("../Service/imagemService");

schema.createTable(db);
const app = express();
app.use(bodyParser.json());

const imagemController = new ImagemController(db);

app.post("/imagem/adicionar", (req, res) =>
  imagemController.adicionarImagem(req, res)
);
app.get("/imagem/listar", (req, res) =>
  imagemController.listarImagens(req, res)
);
app.put("/imagem/atualizar/:id", (req, res) =>
  imagemController.atualizarImagem(req, res)
);
app.delete("/imagem/deletar/:id", (req, res) =>
  imagemController.deletarImagem(req, res)
);

app.listen(3005, () => {
  console.log("Porta 3005 funcionando");
});

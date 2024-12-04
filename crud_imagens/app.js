const express = require("express");
const bodyParser = require("body-parser");
const connectionService = require("./Service/ConnectionService");
connectionService.createSchema();

const imagemController = require("./Controller/imagemController");
const app = express();

app.use(bodyParser.json());
imagemController(app); // Passa o `app` para configurar as rotas

app.listen(3005, () => {
  console.log("Porta 3005 funcionando");
});

const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./Routes/routes");
const connectionService = require("./Service/ConnectionService");
connectionService.createSchema();

const app = express();

app.use(bodyParser.json());

app.use(routes);

app.listen(3006, () => {
  console.log("Porta 3006 funcionando");
});

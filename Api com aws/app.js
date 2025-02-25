const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./Routes/Routes");
const connectionService = require("./Service/ConnectionService");

connectionService.createSchema();

const app = express();
app.use(bodyParser.json());
app.use(routes);

app.listen(3010, () => {
  console.log("Porta 3010 funcionando");
});
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./Routes/AwsRoutes");
const connectionService = require("./Service/ConnectionService");
connectionService.createSchema();

const app = express();
app.use(bodyParser.json());
app.use(routes);
app.listen(3008, () => {
  console.log("Porta 3008 funcionando");
});

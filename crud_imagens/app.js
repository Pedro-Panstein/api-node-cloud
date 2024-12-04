//const schema = require("../createTables");
//schema.createSchema();
//const db = require("../Repository/dbRepository");
//schema.createTable(db);

//const db = require("./Service/ConnectionService");
//atualizar isto

const express = require("express");
const app = express();

function getApp() {
  return app;
}

app.listen(3005, () => {
  console.log("Porta 3005 funcionando");
});

module.exports = getApp;
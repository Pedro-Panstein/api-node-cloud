const express = require("express");
const app = express();
//importar o mysql
const bodyParser = require("body-parser");
const mysql = require("mysql");

app.use(bodyParser.json());

//Configurações para fazer a conexão
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "db_crudimagem",
});

//Conecta ao banco de dados
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL: " + err.stack);
    return;
  }
  console.log("Connected to MySQL as ID " + db.threadId);
});

//Método post para adiconar um usuario
app.post("/imagem/adicionar", (req, res) => {
  const { id, referencia, data_criacao, titulo } = req.body;
  db.query(
    "INSERT INTO imagens (id, referencia, data_criacao, titulo) VALUES (?, ?, ?, ?)",
    [id, referencia, data_criacao, titulo],
    (err, result) => {
      if (err) {
        console.error("Erro ao executar a query: " + err.stack);
        res.status(400).send("Error ao criar a imagem");
        return;
      }
      res.status(201).send("Imagem criado com sucesso");
    }
  );
});

app.get("/imagem/listar", (req, res) => {
  db.query("SELECT * FROM imagens", (err, results) => {
    if (err) {
      console.error("Error executing query: " + err.stack);
      res.status(500).send("Erro ao listar as imagens");
      return;
    }
    res.json(results);
  });
});

//Método put para
app.put("/imagens/atualizar/:id", (req, res) => {
  const { referencia, data_criacao, titulo } = req.body;
  const userId = parseInt(req.params.id);
  db.query(
    "UPDATE imagens SET referencia = ?, data_criacao = ?, titulo = ? WHERE id = ?",
    [referencia, data_criacao, titulo, userId],
    (err, result) => {
      if (err) {
        console.error("Error executing query: " + err.stack);
        res.status(500).send("Erro ao atualizar a imagem");
        return;
      }
      res.send("User atualizado com sucesso");
    }
  );
});

app.delete("/imagens/deletar/:id", (req, res) => {
  db.query(
    "DELETE FROM imagens WHERE id = ?",
    [parseInt(req.params.id)],
    (err, result) => {
      if (err) {
        console.error("Erro ao executar a query: " + err.stack);
        res.status(400).send("Error ao deletar a imagem");
        return;
      }
      res.status(201).send("Imagem deletada com sucesso");
    }
  );
});

app.listen(3005, () => {
  console.log("Porta 3005 funcionando");
});

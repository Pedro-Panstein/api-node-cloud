const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_desafio",
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
app.post("/users/adicionar", (req, res) => {
  const { id, nome, data_criacao } = req.body;
  db.query(
    "INSERT INTO usuario (id, nome, data_criacao) VALUES (?, ?, ?)",
    [id, nome, data_criacao],
    (err, result) => {
      if (err) {
        console.error("Erro ao executar a query: " + err.stack);
        res.status(400).send("Error ao criar o user");
        return;
      }
      res.status(201).send("User criado com sucesso");
    }
  );
});

//Método get para listar os usuarios
app.get("/users/listar", (req, res) => {
  db.query("SELECT * FROM usuario", (err, results) => {
    if (err) {
      console.error("Error executing query: " + err.stack);
      res.status(500).send("Erro ao listar os usuarios");
      return;
    }
    res.json(results);
  });
});

//Método put para 
app.put("/users/atualizar/:id", (req, res) => {
  const { nome, data_criacao } = req.body;
  const userId = parseInt(req.params.id);
  db.query(
    "UPDATE usuario SET nome = ?, data_criacao = ? WHERE id = ?",
    [nome, data_criacao, userId],
    (err, result) => {
      if (err) {
        console.error("Error executing query: " + err.stack);
        res.status(500).send("Erro ao atualizar o usuario");
        return;
      }
      res.send("User atualizado com sucesso");
    }
  );
});

app.delete("/users/deletar/:id", (req, res) => {
  db.query(
    "DELETE FROM usuario WHERE id = ?",
    [parseInt(req.params.id)],
    (err, result) => {
      if (err) {
        console.error("Erro ao executar a query: " + err.stack);
        res.status(400).send("Error ao deletar o user");
        return;
      }
      res.status(201).send("User deletado com sucesso");
    }
  );
});

app.listen(3003, () => {
  console.log("Porta 3003 funcionando");
});

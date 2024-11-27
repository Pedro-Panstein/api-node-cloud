const express = require("express"); //importanto o express
const app = express(); // instanciando ele

app.use(express.json()); //serve para configurar em formato json

let musicas = [
  { id: 1, nome: "Pé na areia" },
  { id: 2, nome: "Pescador" },
];

// api para fazer as requisições no /musicas
app.get("/musicas", (req, res) => {
  res.json(musicas);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

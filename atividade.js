const express = require("express");
const app = express();

app.use(express.json());

let musicas = [
  { id: 1, nome: "Pé na areia" },
  { id: 2, nome: "Pescador" },
];

//Atividade 1 - exercícios do quadro
app.get("/atividade1/:indice", (req, res) => {
  const indiceParam = req.params.indice;
  return res.json(musicas[indiceParam])
});

//Atividade 2 - exercícios do quadro
app.get("/atividade2/:idMusica", (req, res) => {
  const id = req.params.idMusica;
  return res.json(musicas[id].nome)
})

//Atividade 3 - exercícios do quadro
app.post("/atividade3", (req, res) => {
  const { id, nome } = req.body;

  if (!id || !nome) {
    return res.status(400).json({ error: "ID e nome são obrigatórios" });
  }

  if (musicas.some((musica) => musica.id === id)) {
    return res.status(400).json({ error: "ID já existe" });
  }

  const novaMusica = { id, nome };
  musicas.push(novaMusica);

  return res.status(201).json(musicas);
});

app.listen(3001, () => {
    console.log("Porta 3001 funcionando")
})
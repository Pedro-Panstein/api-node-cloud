const bodyParser = require("body-parser");
const db = require("../Service/ConnectionService");
const imagemRepository = require("../Repository/imagemRepository");
const getApp = require("../app");
const app = getApp();
app.use(bodyParser.json());

const repository = new imagemRepository(db);

app.post("/imagem/adicionar", (req, res) =>
  repository.adicionarImagem(req, res)
);

app.get("/imagem/listar", (req, res) => repository.listarImagens(req, res));

app.put("/imagem/atualizar/:id", (req, res) =>
  repository.atualizarImagem(req, res)
);
app.delete("/imagem/deletar/:id", (req, res) =>
  repository.deletarImagem(req, res)
);

app.listen(3005, () => {
  console.log("Porta 3005 funcionando");
});

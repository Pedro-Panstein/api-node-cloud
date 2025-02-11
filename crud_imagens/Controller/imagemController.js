const imagemService = require("../Service/imagemService");

const adicionarImagem = async (req, res) => {
  try {
    const imagem = await imagemService.adicionarImagem(
      req.body.referencia,
      req.body.data_criacao,
      req.body.titulo
    );
    res.status(201).send("Imagem adicionada com sucesso");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getAllImagens = async (req, res) => {
  try {
    const imagens = await imagemService.getAllImagens();
    res.json(imagens);
  } catch (err) {
    res
      .status(500)
      .send("Ocorreu um erro ao buscar as imagens: " + err.message);
  }
};

const getImageById = async (req, res) => {
  try {
    const imagem = await imagemService.getImagemById(req.params.id);
    res.json(imagem);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const atualizarImagem = async (req, res) => {
  try {
    const imagem = await imagemService.atualizarImagem(
      req.params.id,
      req.body.referencia,
      req.body.data_criacao,
      req.body.titulo
    );
    res.send("Imagem atualizada com sucesso");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deletarImagem = async (req, res) => {
  try {
    await imagemService.deletarImagem(req.params.id);
    res.send("Imagem deletada com sucesso");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  adicionarImagem,
  getAllImagens,
  getImageById,
  atualizarImagem,
  deletarImagem,
};

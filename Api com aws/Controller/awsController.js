const awsService = require("../Service/AwsService");

const addImage = async (req, res) => {
  try {
    const image = await awsService.addImage(
      req.body.titulo,
      req.body.uploadPath,
      req.body.id_usuario
    );
    res.json(image);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getAllImages = async (req, res) => {
  try {
    const images = await awsService.getAllImages();
    res.json(images);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const downloadFile = async (req, res) => {
  try {
    const result = await awsService.getImageByReferencia(req.body.keyName);

    if (result.length > 0 && result[0].image) {
      const image = result[0].image;
      const novaImagem = await awsService.downloadFile(
        req.body.keyName,
        image.titulo
      );
      res.json(novaImagem);
    } else {
      res.status(400).send("Esta imagem não pertence ao seu banco de dados");
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const getImageById = async (req, res) => {
  try {
    const image = await awsService.getImageById(req.params.id);
    res.json(image);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getImageByReferencia = async (req, res) => {
  try {
    const image = await awsService.getImageByReferencia(req.params.referencia);
    res.json(image);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  addImage,
  getAllImages,
  downloadFile,
  getImageById,
  getImageByReferencia,
};

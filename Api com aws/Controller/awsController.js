const awsService = require("../Service/AwsService");

const addImage = async (req, res) => {
  try {
    const image = await awsService.addImage(
      req.body.titulo,
      req.body.imageName,
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
    let imagem = await awsService.getImageByReferencia(req.body.keyName);
    const image = await awsService.downloadFile(
      req.body.keyName,
      imagem[0].titulo
    );
    res.json(image);
  } catch (err) {
    res.status(500).send(err.message);
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

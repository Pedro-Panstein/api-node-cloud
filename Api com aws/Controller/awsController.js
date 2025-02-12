const awsService = require("../Service/AwsService");

const addImage = async (req, res) => {
  try {
    const image = await awsService.addImage(
      req.body.filePath,
      req.body.titulo,
      req.body.id
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
    const image = await awsService.downloadFile(
      req.body.bucketName,
      req.body.keyName,
      req.body.downloadPath
    );
    res.json(image);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  addImage,
  getAllImages,
  downloadFile,
};

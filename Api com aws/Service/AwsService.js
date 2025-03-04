const awsRepository = require("../Repository/AwsRepository");
const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-1",
  accessKeyId: "ACCESS_KEY",
  secretAccessKey: "SECRET_KEY",
});

const s3 = new AWS.S3();
const fs = require("fs");

class AwsService {
  static addImage = async (titulo, imageName, uploadPath, id_usuario) => {
    const uuid = crypto.randomUUID();
    let ref = uuid;
    let finalUploadPath = `${uploadPath}${imageName}`;

    try {
      const fileContent = fs.readFileSync(finalUploadPath);

      const params = {
        Bucket: "bucketmi74",
        Key: ref,
        Body: fileContent,
      };

      const data = await s3.upload(params).promise();
      console.log("Arquivo carregado com sucesso:", data.Location);

      return awsRepository.adiconarImagem(titulo, ref, id_usuario);
    } catch (err) {
      console.error("Erro ao fazer o upload:", err);
      throw err;
    }
  };

  static getAllImages = () => {
    return awsRepository.getAllImages(); //por enquando não está integrado a nada
  };

  static downloadFile = (keyName, downloadPath, imageTitle) => {
    const params = {
      Bucket: "bucketmi74",
      Key: keyName,
    };

    const file = fs.createWriteStream(`${downloadPath}${imageTitle}.png`);

    s3.getObject(params).createReadStream().pipe(file);

    file.on("close", () => {
      console.log(
        "Arquivo baixado com sucesso: ",
        `${downloadPath}${imageTitle}.png`
      );
    });

    return awsRepository.getImageByReferencia(keyName);
  };

  static getImageById = (id) => {
    return awsRepository.getImageById(id);
  };

  static getImageByReferencia = (referencia) => {
    return awsRepository.getImageByReferencia(referencia);
  };
}

module.exports = AwsService;

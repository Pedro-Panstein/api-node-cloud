const awsRepository = require("../Repository/AwsRepository");
const AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-1",
  accessKeyId: "access_key",
  secretAccessKey: "acess_key",
});

const s3 = new AWS.S3();
const fs = require("fs");

class AwsService {
  static addImage = (filePath, titulo, ref, id_usuario) => {
    const uuid = crypto.randomUUID();
    ref = uuid;
    console.log(ref);

    const fileContent = fs.readFileSync(filePath);

    const params = {
      Bucket: "bucketmi74",
      Key: ref,
      Body: fileContent,
    };

    s3.upload(params, (err, data) => {
      if (err) {
        console.error("Erro ao fazer o upload:", err);
      } else {
        console.log("Arquivo carregado com sucesso:", data.Location);
      }
    });

    return awsRepository.adiconarImagem(titulo, ref, id_usuario);
  };

  static getAllImages = () => {
    return awsRepository.getAllImages();
  };

  static downloadFile = (bucketName, keyName, downloadPath) => {
    const params = {
      Bucket: bucketName,
      Key: keyName,
    };

    const file = fs.createWriteStream(downloadPath);

    s3.getObject(params).createReadStream().pipe(file);

    file.on("close", () => {
      console.log("Arquivo baixado com sucesso: ", downloadPath);
    });
  };
}

module.exports = AwsService;

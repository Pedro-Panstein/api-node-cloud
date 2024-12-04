const imagemRepositor = require("../Repository/imagemRepository");

class imagemService {
  static adicionarImagem = (referencia, data_criacao, titulo) => {
    return imagemRepositor.adicionarImagem(referencia, data_criacao, titulo);
  };

  static getAllImagens = () => {
    return imagemRepositor.getAllImagens();
  };

  static getImagemById = (id) => {
    return imagemRepositor.getImagemById(id);
  };

  static atualizarImagem = (id, referencia, data_criacao, titulo) => {
    return imagemRepositor.atualizarImagem(id, referencia, data_criacao, titulo);
  };

  static deletarImagem = (id) => {
    return imagemRepositor.deletarImagem(id);
  };
}

module.exports = imagemService;
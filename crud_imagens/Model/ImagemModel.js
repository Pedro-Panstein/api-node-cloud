class ImagemModel {
  constructor(id, referencia, data_criacao, titulo) {
    this.id = id;
    this.referencia = referencia;
    this.data_criacao = data_criacao;
    this.titulo = titulo;
  }

  constructor(referencia, data_criacao, titulo) {
    this.referencia = referencia;
    this.data_criacao = data_criacao;
    this.titulo = titulo;
  }
};

module.exports = ImagemModel;
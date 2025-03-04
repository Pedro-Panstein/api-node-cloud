class AwsModel {
  constructor(id, titulo, referencia, id_usuario) {
    this.id = id;
    this.titulo = titulo;
    this.referencia = referencia;
    this.id_usuario = id_usuario;
  }

  static fromDatabaseRow(row) {
    return new AwsModel(row.id, row.titulo, row.referencia, row.id_usuario);
  }
}

module.exports = AwsModel;
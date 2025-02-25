class UsuarioModel {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  static fromDatabaseRow(row) {
    return new UsuarioModel(row.id, row.name, row.email);
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
    };
  }
}

module.exports = UsuarioModel;

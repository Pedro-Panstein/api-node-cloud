const usuarioRepository = require("../Repository/usuarioRepository");

class usuarioService {
  static adicionarUsuario = (nome, data_criacao) => {
    return usuarioRepository.adicionarUsuario(nome, data_criacao);
  };

  static getUsuarioById = (id) => {
    return usuarioRepository.getUsuarioById(id);
  };

  static getAllUsuarios = () => {
    return usuarioRepository.getAllUsuarios();
  };

  static atualizarUsuario = (id, nome, data_criacao) => {
    return usuarioRepository.atualizarUsuario(id, nome, data_criacao);
  };

  static deletarUsuario = (id) => {
    return usuarioRepository.deletarUsuario(id);
  };
}

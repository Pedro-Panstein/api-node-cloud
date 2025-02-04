const usuarioRepository = require("../Repository/usuarioRepository");

const adicionarUsuario = async (req, res) => {
  try {
    await usuarioRepository.adicionarUsuario(
      req.body.nome,
      req.body.data_criacao
    );
    res.status(201).send("Usuarios criado com sucesso");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await usuarioRepository.getAllUsuarios();
    res.json(usuarios);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getUsuarioById = async (req, res) => {
  try {
    const usuario = await usuarioRepository.getUsuarioById(req.params.id);
    res.json(usuario);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const atualizarUsuario = async (req, res) => {
  try {
    await usuarioRepository.atualizarUsuario(
      req.params.id,
      req.body.nome,
      req.body.data_criacao
    );
    res.send("Usuario atualizada com sucesso");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const deletarUsuario = async (req, res) => {
  try {
    await usuarioRepository.deletarUsuario(req.params.id);
    res.send("Usuario deletada com sucesso");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  adicionarUsuario,
  getAllUsuarios,
  getUsuarioById,
  atualizarUsuario,
  deletarUsuario,
};

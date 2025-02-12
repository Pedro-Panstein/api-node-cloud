const userService = require("../Service/UserService");

const adicionarUsuario = async (req, res) => {
  try {
    const user = await userService.adicionarUsuario(
      req.body.name,
      req.body.email
    );
    res.json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = {
  adicionarUsuario,
  getAllUsers,
};

const userRepository = require("../Repository/UserRepository");

class UserService {
  static adicionarUsuario = (name, email) => {
    return userRepository.adicionarUsuario(name, email);
  };

  static getAllUsers = () => {
    return userRepository.getAllUsers();
  };
}

module.exports = UserService;
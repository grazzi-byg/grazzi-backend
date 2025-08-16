const GlobalController = require("./GlobalController");
const AdminUserDAO = require("../dao/AdminUserDAO");

class AdminUserController extends GlobalController {
  constructor() {
    super(AdminUserDAO);
  }
}

module.exports = new AdminUserController();

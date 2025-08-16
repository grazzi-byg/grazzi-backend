const GlobalDAO = require("./GlobalDAO");
const AdminUser = require("../models/AdminUser");

class AdminUserDAO extends GlobalDAO {
  constructor() {
    super(AdminUser);
  }
}

module.exports = new AdminUserDAO();
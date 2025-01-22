const Product = require("../models/Product");
const GenericDAO = require("./GenericDao");

class ProductDAO extends GenericDAO {
  constructor() {
    super(Product);
  }
}

module.exports = new ProductDAO();

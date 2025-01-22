const Product = require("../models/Product");
const GlobalDAO = require("./GlobalDAO");

class ProductDAO extends GlobalDAO{
  constructor() {
    super(Product);
  }
}

module.exports = new ProductDAO();

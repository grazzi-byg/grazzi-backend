const GlobalDAO = require("./GlobalDAO");
const Product = require("../models/Product");

class ProductDAO extends GlobalDAO {
  constructor() {        
    super(Product);
  }
}

module.exports = new ProductDAO();

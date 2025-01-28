const GlobalController = require("./GlobalController");
const ProductDAO = require("../dao/ProductDAO");

class ProductController extends GlobalController {
  constructor() {    
    super(ProductDAO);
  }
}

module.exports = new ProductController();

const GlobalDAO = require("./GlobalDAO");
const Product = require("../models/Product");
const { formatProductId } = require("../utils/productIdGenerator");

class ProductDAO extends GlobalDAO {
  constructor() {
    super(Product);
  }

  async create(data) {
    try {
      const categoryPrefixes = {
        cadenas: "CA",
        brazaletes: "BR",
        anillos: "AN",
        aretes: "AR",
      };

      const category = data.category;
      const prefix = categoryPrefixes[category];

      if (!prefix) {
        throw new Error(`Invalid category: ${category}`);
      }

      const count = await Product.countDocuments({
        productId: { $regex: `^${prefix}` },
      });

      const nextId = formatProductId(prefix, count + 1);

      const newProduct = {
        ...data,
        productId: nextId,
      };

      return await super.create(newProduct);
    } catch (error) {
      throw new Error(`Error creating product with generated ID: ${error.message}`);
    }
  }
}

module.exports = new ProductDAO();

const ProductDAO = require("../dao/ProductDAO");

class ProductController {
  async create(req, res) {
    try {
      const product = await ProductDAO.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const products = await ProductDAO.getAll();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getById(req, res) {
    try {
      const product = await ProductDAO.getById(req.params.id);
      res.status(200).json(product);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async updateById(req, res) {
    try {
      const updatedProduct = await ProductDAO.updateById(req.params.id, req.body);
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async deleteById(req, res) {
    try {
      const deletedProduct = await ProductDAO.deleteById(req.params.id);
      res.status(200).json({ message: "Producto deleted", product: deletedProduct });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

module.exports = new ProductController();

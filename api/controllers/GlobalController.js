class GlobalController {
  constructor(dao) {    
    this.dao = dao;
  }

  async create(req, res) {
    try {
      const item = await this.dao.create(req.body);
      res.status(201).json(item);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const items = await this.dao.getAll();
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getByKey(req, res) {
    try {
      const { key, value } = req.params; // Extraer clave y valor de los parámetros de la URL
      const item = await this.dao.getByKey(key, value);
      if (!item) {
        return res.status(404).json({ message: "Item not found" });
      }
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateByKey(req, res) {
    try {
      const { key, value } = req.params;
      const updatedItem = await this.dao.updateByKey(key, value, req.body);
      if (!updatedItem) {
        return res.status(404).json({ message: "Item not found" });
      }
      res.status(200).json(updatedItem);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteByKey(req, res) {
    try {
      const { key, value } = req.params;
      const deletedItem = await this.dao.deleteByKey(key, value);
      if (!deletedItem) {
        return res.status(404).json({ message: "Item not found" });
      }
      res.status(200).json({ message: "Item deleted", item: deletedItem });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = GlobalController;

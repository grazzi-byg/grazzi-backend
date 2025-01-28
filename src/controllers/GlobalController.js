class GlobalController {
  constructor(dao) {    
    this.dao = dao;
    console.log(this.dao);    
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
    console.log(this.dao);
    try {
      const items = await this.dao.getAll();
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getById(req, res) {
    try {
      const item = await this.dao.getById(req.params.id);
      if (!item) {
        return res.status(404).json({ message: "Item not found" });
      }
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateById(req, res) {
    try {
      const updatedItem = await this.dao.updateById(req.params.id, req.body);
      if (!updatedItem) {
        return res.status(404).json({ message: "Item not found" });
      }
      res.status(200).json(updatedItem);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteById(req, res) {
    try {
      const deletedItem = await this.dao.deleteById(req.params.id);
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

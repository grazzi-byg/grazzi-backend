class GlobalDAO {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      const document = new this.model(data);
      return await document.save();
    } catch (error) {
      throw new Error(`Error creating document: ${error.message}`);
    }
  }

  async getAll(filter = {}) {
    try {
      return await this.model.find(filter);
    } catch (error) {
      throw new Error(`Error getting documents: ${error.message}`);
    }
  }

  async getByKey(key, value) {
    try {
      const document = await this.model.findOne({ [key]: value });
      if (!document) throw new Error("Document not found");
      return document;
    } catch (error) {
      throw new Error(`Error getting document by ${key}: ${error.message}`);
    }
  }

  async updateByKey(key, value, updateData) {
    try {
      const updatedDocument = await this.model.findOneAndUpdate(
        { [key]: value },
        updateData,
        { new: true, runValidators: true }
      );
      if (!updatedDocument) throw new Error("Document not found");
      return updatedDocument;
    } catch (error) {
      throw new Error(`Error updating document by ${key}: ${error.message}`);
    }
  }

  async deleteByKey(key, value) {
    try {
      const deletedDocument = await this.model.findOneAndDelete({ [key]: value });
      if (!deletedDocument) throw new Error("Document not found");
      return deletedDocument;
    } catch (error) {
      throw new Error(`Error deleting document by ${key}: ${error.message}`);
    }
  }
}

module.exports = GlobalDAO;

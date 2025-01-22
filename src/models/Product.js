const mongoose = require("mongoose");
  
const ProductSchema = new mongoose.Schema(
  {
    product_id: {
      type: String,
      required: true,
      unique: true,
    },
    product_name: {
      type: String,
      required: true,
      trim: true,
    },
    product_image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    material: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", ProductSchema);

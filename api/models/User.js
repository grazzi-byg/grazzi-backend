const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    identificationType: { type: String, required: true, default: "N/A" },
    identificationNumber: {
      type: String,
      unique: false,
      sparse: true,
      default: "N/A",
    },
    name: { type: String, required: true, default: "N/A" },
    lastName1: { type: String, required: true, default: "N/A" },
    lastName2: { type: String, required: true, default: "N/A" },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, default: "N/A" },
    address: { type: String, required: true, default: "N/A" },
    housingDetail: { type: String, default: "N/A" },
    neighborhood: { type: String, default: "N/A" },
    department: { type: String, required: true, default: "N/A" },
    city: { type: String, required: true, default: "N/A" },
    shoppingBag: { type: [String], default: [] },
    order: {
      products: [
        {
          productId: { type: String, required: true },
          productName: { type: String, required: true },
          quantity: { type: Number, required: true },
          totalPrice: { type: Number, required: true },
        },
      ],
      total: { type: Number, required: true, default: 0 },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

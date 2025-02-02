const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    identificationType: { type: String, required: true },
    identificationNumber: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    lastName1: { type: String, required: true },
    lastName2: { type: String },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    housingDetail: { type: String },
    neighborhood: { type: String },
    city: { type: String, required: true },
    shopping_bag: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

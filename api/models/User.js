const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    identificationType: { type: String, required: true, default: "N/A" },
    identificationNumber: { type: String, unique: false, sparse: true, default: null },  
    name: { type: String, required: true, default: "N/A" },
    lastName1: { type: String, required: true, default: "N/A" },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, default: "N/A" },
    address: { type: String, required: true, default: "N/A" },
    housingDetail: { type: String, default: "" },
    neighborhood: { type: String, default: "" },
    city: { type: String, required: true, default: "N/A" },
    shopping_bag: { type: [String], default: [] },
  },
  { timestamps: true }
);


module.exports = mongoose.model("User", UserSchema);

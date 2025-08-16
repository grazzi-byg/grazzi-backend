const mongoose = require("mongoose");
const CryptoJS = require("crypto-js");

const AdminUserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "customer"], default: "customer" },
  },
  { timestamps: true }
);

AdminUserSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  this.password = CryptoJS.SHA256(this.password).toString();
  next();
});

module.exports = mongoose.model("AdminUser", AdminUserSchema);
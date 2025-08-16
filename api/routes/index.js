const express = require("express");
const productRoutes = require("./productRoutes");
const userRoutes = require("./userRoutes");
const authRoutes = require("./authRoutes");
const adminUserRoutes = require("./adminUserRoutes");

const router = express.Router();

router.use("/products", productRoutes);
router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/admin-users", adminUserRoutes);

module.exports = router;

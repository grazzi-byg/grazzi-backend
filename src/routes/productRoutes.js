const express = require("express");
const ProductController = require("../controllers/ProductController");

const router = express.Router();

router.get("/", (req, res) => ProductController.getAll(req, res));  
router.post("/", (req, res) => ProductController.create(req, res));
router.get("/:id", (req, res) => ProductController.getById(req, res));
router.put("/:id", (req, res) => ProductController.updateById(req, res));
router.delete("/:id", (req, res) => ProductController.deleteById(req, res));

module.exports = router;

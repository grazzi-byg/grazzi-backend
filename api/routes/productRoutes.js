const express = require("express");
const ProductController = require("../controllers/ProductController");

const router = express.Router();

router.get("/", (req, res) => ProductController.getAll(req, res));  
router.post("/", (req, res) => ProductController.create(req, res));
router.get("/:key/:value", (req, res) => ProductController.getByKey(req, res));
router.put("/:key/:value", (req, res) => ProductController.updateByKey(req, res));
router.delete("/:key/:value", (req, res) => ProductController.deleteByKey(req, res));

module.exports = router;

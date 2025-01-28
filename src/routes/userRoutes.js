const express = require("express");
const UserController = require("../controllers/UserController");

const router = express.Router();

router.get("/", (req, res) => UserController.getAll(req, res));  
router.post("/", (req, res) => UserController.create(req, res));
router.get("/:id", (req, res) => UserController.getById(req, res));
router.put("/:id", (req, res) => UserController.updateById(req, res));
router.delete("/:id", (req, res) => UserController.deleteById(req, res));

module.exports = router;

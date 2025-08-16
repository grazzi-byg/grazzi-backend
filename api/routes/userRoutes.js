const express = require("express");
const UserController = require("../controllers/UserController");

const router = express.Router();

router.get("/", (req, res) => UserController.getAll(req, res));
router.post("/", (req, res) => UserController.create(req, res));
router.get("/:key/:value", (req, res) => UserController.getByKey(req, res));
router.put("/:key/:value", (req, res) => UserController.updateByKey(req, res));
router.delete("/:key/:value", (req, res) => UserController.deleteByKey(req, res));

module.exports = router;

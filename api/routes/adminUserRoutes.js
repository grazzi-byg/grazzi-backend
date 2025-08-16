const express = require("express");

const AdminUserController = require("../controllers/AdminUserController");

const router = express.Router();

router.get("/", (req, res) => AdminUserController.getAll(req, res));
router.post("/", (req, res) => AdminUserController.create(req, res));
router.get("/:key/:value", (req, res) => AdminUserController.getByKey(req, res));
router.put("/:key/:value", (req, res) => AdminUserController.updateByKey(req, res));
router.delete("/:key/:value", (req, res) => AdminUserController.deleteByKey(req, res));

module.exports = router;

const express = require("express");
const router = express.Router();
const userController = require("../controllers/User.controllers");
const authMiddleware = require("../middlewares/authmiddleware");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/user", authMiddleware, userController.getUser);

module.exports = router;

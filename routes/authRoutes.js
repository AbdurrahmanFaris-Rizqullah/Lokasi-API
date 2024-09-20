const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

// Registrasi pengguna baru
router.post("/register", register);

// Login pengguna
router.post("/login", login);

router.get("/", (r, q) => {
  q.send("Halo");
});

// Route yang dilindungi
router.get("/protected-route", authMiddleware, (req, res) => {
  res.json({ message: "You have access to this route", user: req.user });
});

module.exports = router;

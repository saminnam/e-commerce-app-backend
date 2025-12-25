const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

/* SIGNUP */
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hash
  });

  res.json({ message: "Signup success" });
});

/* LOGIN */
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email });
//   if (!user) return res.status(404).json({ message: "User not found" });

//   const match = await bcrypt.compare(password, user.password);
//   if (!match) return res.status(401).json({ message: "Wrong password" });

//   const token = jwt.sign(
//     {
//       id: user._id,
//       role: user.role,
//       resellerCoupon: user.resellerCoupon
//     },
//     "SECRET_KEY",
//     { expiresIn: "7d" }
//   );

//   res.json({ token, user });
// });
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@test.com" && password === "123456") {
    return res.json({
      token: "fake-jwt-token",
      user: { email }
    });
  }

  res.status(401).json({ message: "Invalid credentials" });
});
module.exports = router;

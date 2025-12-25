const express = require("express");
const Reseller = require("../models/Reseller");
const User = require("../models/User");
const auth = require("../models/auth");

const router = express.Router();

router.post("/verify-coupon", auth, async (req, res) => {
  const { couponCode } = req.body;

  const coupon = await Reseller.findOne({ couponCode, active: true });
  if (!coupon) return res.status(400).json({ message: "Invalid coupon" });

  await User.findByIdAndUpdate(req.user.id, {
    role: "reseller",
    resellerCoupon: couponCode
  });

  res.json({ message: "Coupon verified" });
});

module.exports = router;

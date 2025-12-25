const express = require("express");
const Product = require("../models/Product");
const Reseller = require("../models/Reseller");
const auth = require("../models/auth");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const products = await Product.find();
  let resellerDiscount = 0;

  if (req.user.role === "reseller") {
    const reseller = await Reseller.findOne({
      couponCode: req.user.resellerCoupon
    });
    resellerDiscount = reseller?.discountPercentage || 0;
  }

  const pricedProducts = products.map(p => {
    let finalPrice = p.price;

    if (req.user.role === "reseller") {
      finalPrice =
        p.resellerPrice -
        (p.resellerPrice * resellerDiscount) / 100;
    }

    return {
      ...p._doc,
      finalPrice
    };
  });

  res.json(pricedProducts);
});

module.exports = router;

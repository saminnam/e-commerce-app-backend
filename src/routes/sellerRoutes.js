const express = require("express");
const router = express.Router();
const Seller = require("../models/sellerModel");

router.post("/", async (req, res) => {
  try {
    const newSeller = new Seller(req.body);
    await newSeller.save();
    res.json({ message: "Seller Registration Successful!" });
  } catch (error) {
    res.status(500).json({ message: "Error registering seller", error });
  }
});

module.exports = router;

import express from "express";
import Seller from "../models/seller.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newSeller = new Seller(req.body);
    await newSeller.save();

    res.status(201).json({
      success: true,
      message: "Seller registration successful!",
    });
  } catch (error) {
    console.error("SELLER REGISTER ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Error registering seller",
    });
  }
});

export default router;

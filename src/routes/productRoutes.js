import express from "express";
import Product from "../models/product.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();

    const pricedProducts = products.map(p => ({
      ...p._doc,          // include all product fields
      finalPrice: p.price // you can modify this later if needed
    }));

    res.json(pricedProducts);
  } catch (error) {
    console.error("PRODUCT FETCH ERROR:", error);
    res.status(500).json({ message: "Failed to fetch products" });
  }
});

export default router;

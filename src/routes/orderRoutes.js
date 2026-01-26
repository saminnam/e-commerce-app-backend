import express from "express";
import Order from "../models/order.js";

const router = express.Router();

// CREATE ORDER
router.post("/", async (req, res) => {
  try {
    const { customer, shippingAddress, products, totalAmount } = req.body;

    if (!products || products.length === 0) {
      return res.status(400).json({ message: "No products found" });
    }

    const order = new Order({
      customer,
      shippingAddress,
      products,
      totalAmount,
      totalProducts: products.length,
    });

    await order.save();

    res.status(201).json(order); // returns full order with customer info
  } catch (error) {
    console.error("ORDER SAVE ERROR 👉", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

// GET ALL ORDERS (Admin)
router.get("/", async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.json(orders);
});

// GET SINGLE ORDER (Admin)
router.get("/:id", async (req, res) => {
  const order = await Order.findById(req.params.id);
  res.json(order);
});

export default router;

// routes/orderRoutes.js
const express = require("express");
const router = express.Router();
const Order = require("../models/order");

/**
 * CREATE ORDER (FROM CHECKOUT PAGE)
 */
router.post("/create", async (req, res) => {
  try {
    console.log("ORDER BODY:", req.body);

    const {
      name,
      email,
      phone,
      address,
      city,
      postalCode,
      products,
      totalAmount,
    } = req.body;

    if (!products || products.length === 0) {
      return res.status(400).json({ message: "No products found" });
    }

    const order = new Order({
      customer: { name, email, phone },
      address: {
        street: address,
        city,
        postalCode,
      },
      products,
      totalAmount,
      totalProducts: products.length,
    });

    await order.save();

    res.status(201).json({ success: true });
  } catch (error) {
    console.error("ORDER SAVE ERROR 👉", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/**
 * ADMIN – GET ALL ORDERS
 */
router.get("/", async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.json(orders);
});

/**
 * ADMIN – SINGLE ORDER DETAILS
 */
router.get("/:id", async (req, res) => {
  const order = await Order.findById(req.params.id);
  res.json(order);
});

module.exports = router;

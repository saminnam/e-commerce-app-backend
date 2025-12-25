// models/Order.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    customer: {
      name: String,
      email: String,
      phone: String,
    },

    address: {
      street: String,
      city: String,
      postalCode: String,
    },

    products: [
      {
        productId: {
          type: String, // ✅ NOT ObjectId
        },

        productName: String,
        quantity: Number,
        price: Number,
      },
    ],

    totalAmount: Number,
    totalProducts: Number,

    status: {
      type: String,
      default: "Pending", // Pending | Shipped | Delivered
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);

const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  businessType: String,
  businessName: String,
  gst: String,
  pan: String,
  pickupAddress: String,
  bankHolderName: String,
  accountNumber: String,
  ifsc: String,
  category: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Seller", sellerSchema);

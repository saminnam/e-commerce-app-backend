const mongoose = require("mongoose");

const resellerSchema = new mongoose.Schema({
  couponCode: { type: String, unique: true },
  discountPercentage: Number,
  active: Boolean
});

module.exports = mongoose.model("Reseller", resellerSchema);

// // models/Product.js
// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//   name: String,
//   price: Number,
//   image: String,
// });

// module.exports = mongoose.model("Product", productSchema);

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  slug: String,
  image: String,
  mrp: Number,
  price: Number,           // normal user price
  resellerPrice: Number,   // base reseller price
  discount: Number,
  rating: Number,
  stock: Number,
  status: String,
  images: [String],
  productDetails: String,
  desc: String,
  category: String,
  author: String,
  publisher: String,
  releasedDate: String
});

module.exports = mongoose.model("Product", productSchema);

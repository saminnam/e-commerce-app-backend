import mongoose from "mongoose";

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
  releasedDate: String,
});

const Product = mongoose.model("Product", productSchema);
export default Product;

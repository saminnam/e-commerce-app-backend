import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    images: [{ type: String }],
    mrp: { type: Number, required: true },
    price: { type: Number, required: true },
    resellerPrice: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    stock: { type: Number, required: true },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
    desc: String,
    productDetails: String,
    category: { type: String, required: true },
    author: String,
    publisher: String,
    releasedDate: String,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;

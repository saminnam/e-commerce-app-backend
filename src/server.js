const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// DB connect
mongoose.connect("mongodb://localhost:27017/ecommerce");

// Routers
// const authRoutes = require("./routes/authRoutes");
// app.use("/api/auth", authRoutes); 
// app.use("/api/reseller", require("./routes/resellerRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
const orderRoutes = require("./routes/orderRoutes");
app.use("/api/orders", orderRoutes);
const sellerRoutes = require("./routes/sellerRoutes");
app.use("/api/seller", sellerRoutes);
const contactRoutes = require("./routes/contactRoutes");
app.use("/api/contact", contactRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));

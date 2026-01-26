import express from "express";
import Contact from "../models/contactModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newContact = await Contact.create(req.body);

    res.status(200).json({
      success: true,
      message: "Contact form submitted successfully",
      data: newContact,
    });
  } catch (error) {
    console.error("Error saving form:", error);
    res.status(500).json({
      success: false,
      message: "Failed to save data",
    });
  }
});

export default router; // ✅ VERY IMPORTANT

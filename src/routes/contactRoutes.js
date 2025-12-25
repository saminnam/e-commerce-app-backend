const express = require("express");
const router = express.Router();
const Contact = require("../models/contactModel");

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
    res.status(500).json({ success: false, message: "Failed to save data" });
  }
});

module.exports = router;

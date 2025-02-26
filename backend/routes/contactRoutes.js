const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

// API Route to Store Contact Form Data
router.post("/send-email", async (req, res) => {
    try {
        const { from_name, email, city, business, contactNo, message } = req.body;

        // Validation: Check required fields
        if (!from_name || !email || !message) {
            return res.status(400).json({ success: false, error: "Missing required fields" });
        }

        // Save data to MongoDB
        const newContact = new Contact({ from_name, email, city, business, contactNo, message });
        await newContact.save();

        res.status(201).json({ success: true, message: "Data stored successfully!" });
    } catch (error) {
        console.error(" Database Error:", error);
        res.status(500).json({ success: false, error: "Failed to store data" });
    }
});

module.exports = router;

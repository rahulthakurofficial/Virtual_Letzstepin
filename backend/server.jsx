const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Test Route
app.get("/", (req, res) => {
    res.send("Server is running!");
});

// Email Sending Route
app.post("/send-email", async (req, res) => {
    const { from_name, email, city, business, contactNo, message } = req.body;

    if (!from_name || !email || !message) {
        return res.status(400).json({ success: false, error: "Missing required fields" });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // Email from .env file
                pass: process.env.EMAIL_PASS, // App Password from .env file
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "rahulthakur.2314@gmail.com",
            subject: "New Contact Form Submission",
            text: `Name: ${from_name}\nEmail: ${email}\nCity: ${city}\nBusiness: ${business}\nContact No: ${contactNo}\nMessage: ${message}`,
        };

        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        console.error("Email Error:", error);
        res.status(500).json({ success: false, error: "Email sending failed" });
    }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

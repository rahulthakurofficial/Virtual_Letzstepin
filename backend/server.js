const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");  
const contactRoutes = require("./routes/contactRoutes");

dotenv.config();

// Initialize Express App
const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Use Routes
app.use("/api", contactRoutes);

// Default Route
app.get("/", (req, res) => {
    res.send("Welcome to the Contact API!");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on http://localhost:${PORT}`));

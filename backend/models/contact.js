const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    from_name: { type: String, required: true },
    email: { type: String, required: true },
    city: { type: String },
    business: { type: String },
    contactNo: { type: String },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Contact", contactSchema);

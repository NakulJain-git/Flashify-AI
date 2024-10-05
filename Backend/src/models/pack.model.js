const mongoose = require("mongoose");

const packSchema = new mongoose.Schema({
    name: { type: String, required: true },
});

const Pack = mongoose.model("Pack", packSchema);
module.exports = { Pack }; // Ensure this matches your import

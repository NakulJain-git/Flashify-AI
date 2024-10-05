 const mongoose = require("mongoose");

const flashcardSchema = new mongoose.Schema(
    {
        question: {
            type: String,
            required: true
        },
        questionImageUrl: {
            type: String,
        },
        answer: {
            type: String,
            required: true
        },
        answerImageUrl: {
            type: String,
        },
        packId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Pack", 
            required: true,
          },
    },
    
    {
        timestamps: true,
    }
)

const FlashCard = mongoose.model('FlashCard', flashcardSchema);
module.exports = { FlashCard };

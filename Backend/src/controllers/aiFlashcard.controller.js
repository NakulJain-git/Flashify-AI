const {generateFlashcard} = require("../services/ai.service");
const createAIFlashcard = async (req, res) => {
    try {
        const data = req.body
        const flashcards = await generateFlashcard(data)
        console.log("res",flashcards);
        return res.status(201).json({
            message: "Flashcard created successfully",
            success: true,
            data: flashcards,
        });
        
    } catch (error) {
        console.log(
            "There is an error in creating a flashcard : controller layer",
            error
        ); // For debugging purposes
        return res.status(500).json({ message: error.message, success: false });
        
    }
};
module.exports = {createAIFlashcard };
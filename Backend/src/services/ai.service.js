const { GoogleGenerativeAI } = require("@google/generative-ai");
const flashcardsServices = require("../services/flashCard.service");
const { Pack } = require("../models/pack.model");
const API_KEY = "AIzaSyCB0oyX0rsSRm-6p_Gf3UIicauyLQPI2Bw"
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const { FlashCard } = require('../models/flashcard.model.js');
const createFlashcardWithGemini = async (data) => {
    // Generating multiple flashcards based on the provided text
    const response = await model.generateContent(
        `You are a flashcard assisting AI.
      Please generate multiple flashcards in JSON format. Each flashcard should follow this structure:
      {
        "packName": <string>, 
        "flashcards":[
            {
            "question": <string>,
            "answer": <string>,
            }
        ]
    }
      Provide multiple flashcards for the following text and give it such that it can be JSON.parsed:
      ${data.prompt}`);

    let results = response.response.text();
    results = results.replace(/```json|```/g, "").trim();
    console.log(results)

    return results;
}

const generateFlashcard = async (data) => {
    try {
        console.log("entered into generateFlashcard");
        let response = await createFlashcardWithGemini(data);
        response = JSON.parse(response);
        console.log(response)
        console.log("test1");

        let pack = await Pack.findOne({ name: response.packName });
        console.log("test2")
        if (!pack) {
            pack = await Pack.create({ name: response.packName });
        }
        console.log("test3")
        response.flashcards.forEach(async (flashcard) => {
            await FlashCard.create({
                question: flashcard.question,
                answer: flashcard.answer,
                packId: pack._id
            });
        });
        const cards = await FlashCard.find({ packId: pack._id }).populate("packId");
        return cards;
    } catch (error) {
        console.log(
            "There is an error in creating a flashcard : controller layer",
            error
        ); // For debugging purposes
    }
}

module.exports = { generateFlashcard };
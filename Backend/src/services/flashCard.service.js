const { FlashCard } = require('../models/flashcard.model.js');
const { Pack } = require('../models/pack.model.js'); // Check the path
const mongoose = require("mongoose");
const { useParams } = require('react-router-dom');

//creating a new flashcard
//updating a flashcard
//getting a flashcard
//getting all flashcard
//deleting a flashcard

class FlashcardsServices {
    async createFlashcard(data) {
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            console.log("Data", data);
            let pack = await Pack.findOne({ name: data.packName.trim() }).session(session)
            console.log("pack found", pack);
            if (!pack) {
                console.log("Creating new pack");
                const newPackArray = await Pack.create([{ name: data.packName.trim() }], { session });
                pack = newPackArray[0];
                console.log("Pack created successfully");
            }
            console.log("Pack", pack._id);
            const newflashCardArray = await FlashCard.create([{
                question: data.question.trim(),
                answer: data.answer.trim(),
                packId: pack._id
            }],
                { session }
            )
            const flashCard = newflashCardArray[0];
            await session.commitTransaction();
            await session.endSession();
            return flashCard;

        }
        catch (error) {
            await session.abortTransaction();
            session.endSession();
            console.log("Error creating flashcard:", error);
            console.log("Error", error);
            throw new Error(error.message);     // Throw error for controller to handle
        }
    }
    async updateFlashcard(id, data) {
        const flashCard = await FlashCard.findById(id);
        if (!flashCard) {
            const newflashCard = await FlashCard.create([data]);
            return newflashCard[0];
        }
        
        const updatedFlashCard = await FlashCard.findByIdAndUpdate(
            id,
            {
                $set: {
                    question: data.question,
                    answer: data.answer
                }
            },
            { new: true }

        )
        return updatedFlashCard;
    }
    
    async deleteFlashcard(id) {
        try {
            const isDeleted = await FlashCard.findByIdAndDelete(id);
            console.log("test1")
            if (!isDeleted) {
                console.log("Flashcard not found");
            }
            return { message: "Flashcard deleted successfully" };
        }
        catch (error) {
            console.log("Error deleting flashcard:", error);
            throw error;
        }
    }

    async getFlashcardById(id) {
        const flashCard = await FlashCard.findById(id).populate('packId');
        if (!flashCard) {
            throw new Error("NO flashcard found")
        }
        return flashCard;
    }

    async getAllFlashcards() {
        try {
            const flashCards = await FlashCard.find().populate('packId');
            return flashCards;
        } catch (error) {
            console.log("Error getting all flashcards:", error);
            throw new Error(error.message);
        }
    }

    async getAllFlashcardsByPackId(pack_id) {
        const pack = await Pack.findById(pack_id);
        console.log("Pack", pack);
        if (!pack) {
            throw new Error("Pack not found");
        }
        const flashCards = await FlashCard.find({ packId: pack_id }).populate('packId');
        console.log("Flashcards", flashCards);
        return flashCards;
    }


}
const flashcardsServices = new FlashcardsServices();
module.exports = flashcardsServices;

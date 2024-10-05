const router = require("express").Router();
const {
  createFlashcard,
  updateFlashcard,
  deleteFlashcard,
  getFlashcardById,
  getAllFlashcards,
  getAllFlashcardsByPackId,
} = require("../../controllers/flashCard.controller.js");

const { 
  createPack,
  updatePack,
  deletePack,
  getPackById,
  getAllPacks
} = require("../../controllers/pack.controller.js");

const { createAIFlashcard } = require("../../controllers/aiFlashcard.controller.js");

router.route("/").get((req, res) => {
  res.send("Flashcard route is working");
})
//create flashcard - POST
router.post("/flashcard", createFlashcard);
//create-ai flashcard - POST
router.post("/flashcard/ai", createAIFlashcard);
//update flashcard - PUT
router.put("/flashcard/:id", updateFlashcard);
//delete flashcard - DELETE
router.delete("/flashcard/:id", deleteFlashcard);
//get flashcardById - GET
router.get("/flashcard/:id", getFlashcardById);
//get all flashcards -GET
router.get("/flashcards", getAllFlashcards);
//get all flashcards by pack id
router.get("/flashcards/pack/:id", getAllFlashcardsByPackId);
// Pack routes

/**
 * @route POST /pack
 * @description Create a new pack
 */
router.post("/pack", createPack);

/**
 * @route Delete /pack/:id
 * @description Delete a pack
 */
router.delete("/pack/:id", deletePack);

/**
 * @route GET /packs
 * @description Get all packs
 */
router.get("/packs", getAllPacks);

/**
 * @route PUT /pack/:id
 * @description Update a pack
 */
router.put("/pack/:id", updatePack);

/**
 * @route GET /pack/:id
 */
router.get("/pack/:id", getPackById);



module.exports = router;
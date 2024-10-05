const packServices  = require("../services/pack.service.js");

const createPack = async (req, res) => {
    try {
        console.log("req.body", req.body);
        const data = req.body;
        const pack = await packServices.createPack(data);
        return res.status(201).json({
            message: "Pack created successfully",
            success: true,
            data: pack,
        });
    } catch (error) {
        console.log(
            "There is an error in creating a pack : controller layer",
            error
        ); // For debugging purposes
        return res.status(500).json({ message: error.message, success: false });
    }
};

const updatePack = async (req, res) => {
    try {
        const packId = req.params.id;
        const data = req.body;
        const updatedPack = await packServices.updatePack(packId, data);
        return res.status(201).json({
            message: "Pack updated successfully",
            success: true,
            data: updatedPack,
        });
    } catch (error) {
        console.log(
            "There is an error in updating a pack : controller layer",
            error
        ); // For debugging purposes
        return res.status(500).json({ message: error.message, success: false });
    }
};
const deletePack = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedPack = await packServices.deletePack(id);
        console.log(deletedPack);
        console.log(id);
        
        return res.status(201).json({
            message: "Pack deleted successfully",
            success: true,
            data: deletedPack,
        });
    } catch (error) {
        console.log(
            "There is an error in deleting a pack : controller layer",
            error
        ); // For debugging purposes
        return res.status(500).json({ message: error.message, success: false });
    }
};

const getPackById = async (req, res) => {
    try {
        const packId = req.params.id;
        const pack = await packServices.getPackById(packId);
        return res.status(201).json({
            message: "Pack fetched successfully",
            success: true,
            data: pack,
        });
    } catch (error) {
        console.log(
            "There is an error in fetching a pack : controller layer",
            error
        ); // For debugging purposes
        return res.status(500).json({ message: error.message, success: false });
    }
};

const getAllPacks = async (req, res) => {
    try {
        const packs = await packServices.getAllPacks();
        return res.status(201).json({
            message: "All packs fetched successfully",
            success: true,
            data: packs,
        });
    } catch (error) {
        console.log(
            "There is an error in fetching all packs : controller layer",
            error
        ); // For debugging purposes
        return res.status(500).json({ message: error.message, success: false });
    }
};
module.exports  ={
    createPack,
    updatePack,
    deletePack,
    getPackById,
    getAllPacks
}

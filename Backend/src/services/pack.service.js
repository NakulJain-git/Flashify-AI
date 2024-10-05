const { Pack } = require('../models/pack.model.js'); 
class PackServices {
    //todos
    //creating a new pack
    //updating a pack
    //getting a pack
    //getting all packs
    //deleting a pack
    async createPack(data) {
        try {
            console.log("Data", data);
            const pack = await Pack.create(data);
            return pack;
        } catch (error) {
            console.log(error);
            throw new Error(error.message)
        }

    }

    async updatePack(packId, data) {
        try {
            const checkPack = await Pack.findById(packId);
            if (!checkPack) {
                console.log("Pack not found with this id")
            }
            const pack = await Pack.findByIdAndUpdate(packId, data, { new: true });
            return pack;
        } 
        catch (error) {
            console.log(error);
            throw new Error(error.message)
        }
    }

    async getPackById(packId){
        const pack = await Pack.findById(packId)
        if(!pack){
            console.log("error-pack not found");
        }
        return pack;
    }

    async getAllPacks(){
        const packs = await Pack.find()
        return packs;
    }

    async deletePack(id){
        const isDeleted = await Pack.findByIdAndDelete(id)
        if(!isDeleted){
            console.log("Error in deleting the pack")
        }
        return isDeleted;
    }
}
const packServices = new PackServices();
module.exports = packServices


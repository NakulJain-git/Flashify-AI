const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const uri = "mongodb+srv://nakuljain2712:nakul123@cluster0.r1dq5.mongodb.net/"
const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
        console.log("Mongo DB connected!!!");
        console.log(`${process.env.PORT}`)
    }
    catch(error){
        console.log("Error Found:",error);
        process.exit(1);
    }
}
module.exports = connectDB;
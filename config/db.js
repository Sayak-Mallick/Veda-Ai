const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async ()=> {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB Database Connected Successfully ${mongoose.connection.host}`.bgGreen.white);
    }
    catch (error) {
        console.log(`MOngoDb Database connection error ${error}`.bgRed.white)
    }
}

module.exports = connectDB
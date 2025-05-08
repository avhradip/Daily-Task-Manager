const mongoose = require('mongoose');
require('dotenv').config();

// const dev = false
// const URL = dev ? process.env.LOCAL : process.env.MONGO_URI 

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('DB connected');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;

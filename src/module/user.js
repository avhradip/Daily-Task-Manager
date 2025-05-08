const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        require: true,
        trim: true
    },
    number: {
        type: String,
        require: true,
        trim: true 
    },
    password: {
        type: String,
        require: true,
        trim: true
    },
    confirmPassword: {
        type: String,
    }
})

module.exports = mongoose.model("user",userSchema)
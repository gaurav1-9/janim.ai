const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        minLength: 3,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 3,
        trim: true,
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true,
    },
    levelPoints: {
        type: Number,
        default: 0,
    },
    avatar: {
        type: Number,
        default: 1,
    }
}, { timestamps: true })

module.exports = mongoose.model("users", userSchema)
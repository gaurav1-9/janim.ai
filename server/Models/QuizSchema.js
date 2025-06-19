const mongoose = require("mongoose")

const quizSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "users",
        required: true
    },
    quizQuestions: [
        {
            question: { type: String, required: true },
            options: { type: [String], required: true },
            answer: { type: Number, required: true },
            explaination: { type: String },
            topic: { type: String, required: true },
            selectedOption: { type: Number }
        }
    ],
    totalQuizDuration: {
        type: Number,
        required: true,
    },
    quizCompletionDuration: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model("quizzes", quizSchema)
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
            explanation: { type: String, required: true },
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
    },
    isCompleted: {
        type: Boolean,
        required: true,
    },
    pointsEarned: {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model("quizzes", quizSchema)
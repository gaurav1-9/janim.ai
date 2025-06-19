const router = require('express').Router()
const UserModel = require("../Models/UserSchema")
const { verifyToken } = require("./auth.routes")
const QuizGeneratorFunction = require("../Services/quizGenerator")

router.get("/generate", verifyToken, async (req, res) => {
    const { qNo, t } = req.query;

    if (!qNo || !t) {
        return res.status(400).json({
            err: true,
            msg: "No query found"
        })
    }
    try {
        const topics = t.split(',');
        const questionList = await QuizGeneratorFunction(qNo, topics)
        if (questionList === -1) {
            return res.status(400).json({
                err: true,
                msg: "Unable to fetch question"
            })
        }
        if (questionList === -2) {
            return res.status(429).json({
                err: true,
                msg: "Quota finished"
            })
        }
        res.status(200).json({
            err: false,
            msg: "working",
            questionList: questionList
        })
    } catch (err) {
        return res.status(500).json({
            err: true,
            msg: "Server Error"
        })
    }
})

module.exports = router
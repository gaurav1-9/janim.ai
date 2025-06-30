const router = require('express').Router()
const QuizModel = require("../Models/QuizSchema")
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
        const updatedQuestionList = questionList.map(question => ({
            ...question,
            selectedOption: null
        }));
        res.status(200).json({
            err: false,
            msg: "working",
            questionList: updatedQuestionList
        })
    } catch (err) {
        return res.status(500).json({
            err: true,
            msg: "Server Error"
        })
    }
})

router.post("/submit", verifyToken, async (req, res) => {
    const userID = req.user.userID
    const { quizQuestions, totalQuizDuration, quizCompletionDuration, isCompleted, pointsEarned } = req.body

    if (!quizQuestions ||
        typeof totalQuizDuration !== "number" ||
        typeof quizCompletionDuration !== "number" ||
        typeof isCompleted !== "boolean" ||
        typeof pointsEarned !== "number"
    ) {
        return res.status(400).json({
            err: true,
            msg: "Missing quiz parameters"
        })
    }
    try {
        const createdQuiz = await QuizModel.create({
            user: userID,
            quizQuestions: quizQuestions,
            totalQuizDuration: totalQuizDuration,
            quizCompletionDuration: quizCompletionDuration,
            isCompleted: isCompleted,
            pointsEarned: pointsEarned,
        })
        res.status(200).json({
            err: false,
            msg: "Quiz Submitted",
            quizID: createdQuiz._id
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            err: true,
            msg: "Server Error"
        })
    }
})

router.get("/show-quiz", verifyToken, async (req, res) => {
    try {
        const { quizID } = req.query;
        const userID = req.user.userID;

        let query = { user: userID };

        if (quizID) {
            query._id = quizID;
        }

        const quiz = (!query._id)
            ? await QuizModel.find(query).sort({createdAt:-1})
            : await QuizModel.findOne(query);

        if (!quiz || quiz.length === 0) {
            return res.status(404).json({ err: true, msg: "No quiz found." });
        }

        res.status(200).json(quiz);
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: true, msg: "Server error." });
    }
});

module.exports = router
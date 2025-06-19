const router = require('express').Router()
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const UserModel = require("../Models/UserSchema")

const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"]

    if (!token) {
        return res.status(401).json({
            err: true,
            msg: "No token found",
            navigateTo: "/auth/login"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (err) {
        return res.status(401).json({
            err: true,
            msg: "Invalid Token",
            navigateTo: "/auth/login"
        })
    }
}

router.get("/", verifyToken, (req, res) => {
    res.status(200).json({
        err: false,
        msg: "Authenticated",
        user: req.user,
    });
})


router.post("/register", async (req, res) => {
    const { name, username, password, gender } = req.body

    if (!name || !username || !password || !gender) {
        return res.status(400).json({
            err: true,
            msg: "all inputes are required"
        })
    }

    try {
        const existingUser = await UserModel.findOne({ username })
        if (existingUser) {
            return res.status(400).json({
                err: true,
                msg: "username alredy exists"
            })
        }
        const hashedPassword = await bcrypt.hash(password.trim(), 10)
        await UserModel.create({
            username: username.trim(),
            name: name.trim(),
            password: hashedPassword,
            gender: gender
        })
        res.status(200).json({
            err: false,
            msg: "user registered"
        })
    } catch (err) {
        res.status(500).json({
            err: true,
            msg: "server Error"
        })
    }
})

router.post("/login", async (req, res) => {
    const { username, password } = req.body
    const trimmedUsername = username.trim()

    if (!trimmedUsername || !password) {
        return res.status(400).json({
            err: true,
            msg: "all inputes are required"
        })
    }

    try {
        const user = await UserModel.findOne({
            username: trimmedUsername,
        })

        if (!user) {
            return res.status(401).json({
                err: true,
                msg: "invalid username or password"
            })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(401).json({
                err: true,
                msg: "invalid username or password"
            })
        }

        const token = jwt.sign(
            {
                userID: user._id,
            },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        )

        res.status(200).json({
            err: false,
            token: token,
        })
    } catch (err) {
        res.status(500).json({
            err: true,
            msg: "server Error"
        })
    }
})

module.exports = {
    AuthRoute: router,
    verifyToken
}
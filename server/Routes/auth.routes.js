const router = require('express').Router()
const bcrypt = require('bcrypt');
const UserModel = require("../Models/UserSchema")

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

module.exports = router
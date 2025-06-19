const router = require('express').Router()
const UserModel = require("../Models/UserSchema")
const { verifyToken } = require("./auth.routes")

router.get("/profile", verifyToken, async (req, res) => {
    const userID = req.user.userID
    try {
        const userData = await UserModel.findById(userID).select("-password")
        if (!userData) {
            return res.status(404).json({
                err: true,
                msg: "No user found"
            })
        }
        res.status(200).json({
            err: false,
            msg: "User Found",
            userData: userData,
        })
    } catch (err) {
        res.status(500).json({
            err: true,
            msg: "server Error"
        })
    }
})

module.exports = router
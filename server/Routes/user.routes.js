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

router.patch("/edit", verifyToken, async (req, res) => {
  const userID = req.user.userID;

  try {
    const userData = await UserModel.findById(userID).select("-password");

    if (!userData) {
      return res.status(404).json({
        err: true,
        msg: "No user found"
      });
    }

    const { name, username, gender, avatar, levelPoints } = req.body;

    if (name && name.trim()) {
      userData.name = name.trim();
    }

    if (username && username.trim() && username.trim() !== userData.username) {
      const existingUser = await UserModel.findOne({ username: username.trim() });
      if (existingUser && existingUser._id.toString() !== userID) {
        return res.status(400).json({
          err: true,
          msg: "Username already present"
        });
      }
      userData.username = username.trim();
    }

    if (gender && gender.trim()) {
      userData.gender = gender.trim();
    }

    if (avatar) {
      userData.avatar = avatar;
    }

    if (levelPoints) {
      userData.levelPoints = userData.levelPoints + levelPoints;
    }

    await userData.save();

    res.status(200).json({
      err: false,
      msg: "Profile updated successfully",
      user: {
        name: userData.name,
        username: userData.username,
        gender: userData.gender,
        avatar: userData.avatar,
        levelPoints: userData.levelPoints
      }
    });

  } catch (err) {
    console.log(userID + " /users/edit: " + err)
    res.status(500).json({
      err: true,
      msg: "Server error"
    });
  }
});


module.exports = router
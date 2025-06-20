const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config()

const { AuthRoute } = require("./Routes/auth.routes")
const UserRoute = require("./Routes/user.routes")
const QuizRoute = require("./Routes/quiz.routes")

const connectToDB = require("./config/config_DB")
connectToDB();

const app = express()
app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"));
app.use(morgan("dev"))

app.get("/", (req, res) => { res.render("index") })
app.use("/api/auth", AuthRoute)
app.use("/api/users", UserRoute)
app.use("/api/quiz", QuizRoute)

app.listen(5000, () => console.log("Server Listening on PORT 5000..."))
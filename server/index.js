const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config()

const {AuthRoute} = require("./Routes/auth.routes")
const UserRoute = require("./Routes/user.routes")

const connectToDB = require("./config/config_DB")
connectToDB();

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))


app.use("/api/auth", AuthRoute)
app.use("/api/users", UserRoute)

app.listen(5000, () => console.log("Server Listening on PORT 5000..."))
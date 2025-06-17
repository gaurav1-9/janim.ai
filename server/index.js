const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express()
dotenv.config()

app.use(express.json())
app.use(morgan("common"))

app.listen(5000, () => console.log("Server Listening on PORT 5000..."))
const express = require('express')
const logger = require("morgan")
const cors = require("cors")
const bodyParser = require('body-parser')
const app = express()


const apiRouter = require("./routes/api")

const {connect} = require("./db/db")

app.use(logger("dev"))
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/api", apiRouter)

connect();


module.exports = app


const express = require("express")
const app = express()

const router = require("./router")

const dotenv = require("dotenv")
dotenv.config()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(express.static("public"))
app.use("/css", express.static(__dirname + "public/css"))
app.use("/img", express.static(__dirname + "public/img"))
app.set("views", "views")
app.set("view engine", "ejs")

app.use("/", router)

app.listen(process.env.PORT)

const cookieParser = require("cookie-parser")
const socketIO = require("socket.io")
const config = require("./config")
const express = require("express")
const tarkine = require("tarkine")
const http = require('http')

const app = express()
const server = http.createServer(app)
const io = new socketIO.Server(server)
const PORT = process.env.PORT || config.port
global.remoteURL = ""

global.IO = io

app.set("view engine", "html")
app.engine("html", tarkine.renderFile)
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname + "/public"))
app.use(express.json())

// Dynamic URL resolver middleware for the template
app.use((req, res, next) => {
    if (!global.remoteURL || global.remoteURL.includes("localhost")) {
        const protocol = req.headers["x-forwarded-proto"] || "http"
        global.remoteURL = `${protocol}://${req.headers.host}`
    }
    next()
})

app.use("/", require("./router"))

server.listen(PORT, "0.0.0.0", () => {
    console.log(`LOCAL  : http://localhost:${PORT}`)
})
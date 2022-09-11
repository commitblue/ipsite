const express = require("express")
const app = express()
app.set("view engine", "ejs")
app.get("/", (req, res) => {
    res.render("pages/index", {
        info: {
            ip: req.headers["x-forwarded-for"]
        }
    })
})
app.listen(8080, () => {
    console.log("Ready")
})
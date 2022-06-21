const express = require("express")
const app = express()
const PORT = 3000


const logger = (req, res, next) => {
    console.log("Log")
    next()
    // "next" is a function that you call so the next piece of middleware runs
}

app.use(logger)

app.get("/", (req, res) => {
    res.send("Homepage")
    console.log("Homepage")

})

app.get("/users", (req, res) => {
    console.log("Users Page")
    res.send("Users Page")
})



app.listen(PORT, console.log("Server listening on port 3000"))


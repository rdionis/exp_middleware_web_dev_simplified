const express = require("express")
const app = express()
const PORT = 3000

app.get("/", (req, res) => {
    res.send("Homepage")
})

app.get("/users", (req, res) => {
    res.send("Users Page")
})

app.listen(PORT, console.log("Server listening on port 3000"))


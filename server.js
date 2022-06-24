const express = require("express")
const app = express()
const PORT = 3000


const logger = (req, res, next) => {
    console.log("Log", req.originalUrl)
    next()
    // "next" is a function that you call so the next piece of middleware runs
}

const auth = (req, res, next) => {
    req.query.admin === "true" ? next() : res.send("No Auth")
    // if (req.query.admin === "true"){
    //     next()
    // } else {
    //     res.send("No auth")
        // we are never calling next in the failure case of our authentication
    //}
    // console.log("Auth")
    // next()
}

// when you are creating global actions you almost always want to put them at the very top so they'll run before everything else

app.use(logger)

app.get("/", (req, res) => {
    res.send("Homepage")
    console.log("Homepage")
    
})

app.get("/users", auth, (req, res) => {
    console.log("Users Page")
    res.send("Users Page")
})



app.listen(PORT, console.log("Server listening on port 3000"))

// middleware runs in the order that you define
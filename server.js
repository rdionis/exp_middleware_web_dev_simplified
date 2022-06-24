const express = require("express")
const app = express()
const PORT = 3000


const logger = (req, res, next) => {
    // console.log("Log", req.originalUrl)
    console.log("before")
    next()
    // "next" is a function that you call so the next piece of middleware runs
    console.log("after")
}

const auth = (req, res, next) => {
    req.query.admin === "true" ? (req.admin = "true", next()) : res.send("No Auth")
    // we are able to pass variables from our middlware to other sections of our controller actions, whether it is another middleware or the final result of our action

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
    console.log(`User is admin = ${req.admin}`)
    console.log("Users Page")
    res.send("Users Page")
})



app.listen(PORT, console.log("Server listening on port 3000"))

// middleware runs in the order that you define
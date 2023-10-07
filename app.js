const http = require('http')
const express = require('express');

const app = express()

// app.use((req,res,next)=>{}) is used to create middleware function .
// req => requiest, res=> response, next =>it is a function, used for activating the next middleware function


// Middleware function 1
app.use((req,res,next)=>{
    console.log("Middleware function 1")
    //  If do not call the next() function ,the 2nd middleware function will not run
    next()
})

// Middleware function 2
app.use((req,res,next)=>{
    console.log("middleware functioon 2")
    // instead of next() we can use res.send() ,we can send the plain html or anyfiles 
    res.send("<h1>Express Prroject 1</h1>")
})
const server = http.createServer(app)


server.listen(3000)
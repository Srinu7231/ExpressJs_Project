const http = require('http')
const express = require('express');
const bosyParser = require('body-parser')

const app = express()

// app.use((req,res,next)=>{}) is used to create middleware function .
// req => requiest, res=> response, next =>it is a function, used for activating the next middleware function

app.use(bosyParser.urlencoded({ extended: false }))
// Middleware function 1
// app.use((req,res,next)=>{
//     console.log("The Magic u r looking for is in the work u r avoiding")
//     //  If do not call the next() function ,the 2nd middleware function will not run
//     next()
// })

// Middleware function 2
app.use("/add-products", (req, res, next) => {
    console.log("middleware functioon 2")
    // instead of next() we can use res.send() ,we can send the plain html or anyfiles 
    // res.send("<h1>The Magic u r looking for is in the work u r avoiding</h1>")
    res.send("<form action='/products' method='POST'><input type='text' name='title' /><button type='submit'>Add</button></form>")

})


app.use("/products", (req, res, next) => {
    console.log(req.body)  
    res.redirect('/')
})


app.use("/", (req, res, next) => {
    console.log("third middleware is running")
    res.send("<p>Nothing will happen just do it</p>")
})
// const server = http.createServer(app)


// server.listen(3000)
app.listen(3000)



// Assignment -1
// const http = require("http")
// const express = require('express')

// const app = express()


// app.use("/user",(req,res,next)=>{
//     res.send("<h1>User Details will be displayed</h1>")
// })

// app.use("/",(req,res,next)=>{
//     res.send("<h1>Home page</h1>")
// })

// const server = http.createServer(app)
// server.listen(3000)
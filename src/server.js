//to initate server type: "npm run dev"
//Server
const express = require('express')
const server = express()

const { 
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

//config nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
// req.body
.use(express.urlencoded({ extended: true }))

// config static files(css, scripts, images)
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//server starter
.listen(5500)
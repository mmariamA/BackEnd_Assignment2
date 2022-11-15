const express = require ("express")
const ejs = require("ejs")

const page = express()

page.use(express.static("public"))

page.set("view engine", "ejs")

page.listen(5000, ()=>{
    console.log("server is running")
})

page.get("/", (req, res)=>{
   const details = [
    {score:70,
    state:'Edo',
    nationality:'Nigeria'}
]
    res.render("index", {details})
})
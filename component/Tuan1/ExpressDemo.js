var express=require('express')
var app=express()
app.use(express.static('image'))
app.get("/",function (req,res) {
    res.send("Hello baba")
})
var service=app.listen(8081,function () {
    console.log("Sussces")
})
var express=require('express')
var app=express()
app.get("/",function (req,res) {
  console.log("Hello cca nannn");
  res.send("Call")
})
app.post("/",function (req,res) {
  console.log("Hi cac bạn");
  res.send("Caili")
})
app.get("/list",function (req,res) {
  console.log("List anh duong");
  res.send("List nha")
})
app.get("/delete",function (req,res) {
  console.log("Lighht");
  res.send("Delete list")
})
var service=app.listen(8081,function () {
  var host=service.address.address;
  var port=service.address.port;
  console.log("Sussces",host,port);
})
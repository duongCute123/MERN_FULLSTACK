var express=require("express")
var fs=require("fs")
var app=express()
//Lấy danh sách các người dùng nhá
app.get("/listUser",function (req,res) {
    fs.readFile(__dirname+"/"+"users.json","utf-8",function (err,data) {
        console.log(data)
        res.end(data)
    })
})
//Thêm người đùng vào hệ thống
user = {
    "user4" : {
       "name" : "mohit",
       "password" : "password4",
       "profession" : "teacher",
       "id": 4
    }
 }
 app.post("/addUser",function (req,res) {
    fs.readFile(__dirname+"/"+"users.json","utf-8",function (err,data) {
        data=JSON.parse(data)
        data["user4"]=user["user4"]
        console.log(data)
        
        res.end(JSON.stringify(data))
    })
 })
//Cập nhật thông tin của người dùng vào


//Xóa người dùng khỏi hệ thống
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
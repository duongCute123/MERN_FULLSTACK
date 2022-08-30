var express=require("express")
var app=express()
var body=require("body-parser")
var bodyPart=body.urlencoded({extended:false})
//Phương thức này gọi file html cần lấy dữ liệu
app.get("/RestFullApi.html",function (req,res) {
    res.sendFile(__dirname+"/"+"RestFullApi.html")
})
//Phướng thức này sau khi submit ở trên form thì dữ liệu đẩy lên json
app.get("/getInfomation",function (req,res) {
    response={
        fullname:req.query.fullname,
        std:req.query.std,
        email:req.query.email,
        op:req.query.op
    }
    console.log(response)
    res.end(JSON.stringify(response))
})
app.post("/post_dl",bodyPart,function (req,res) {
    response={
        firstName:req.query.firstName,
        lastName:req.query.lastName
    }
    console.log(response);
    res.end(JSON.stringify(response))
})
//Phương thức POST dữ liệu với form
var service=app.listen(8081,function (host,port) {
    var host=service.address().address
    var port=service.address().port
    console.log("Susscess",host,port)
})
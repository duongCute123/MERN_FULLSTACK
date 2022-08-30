var express = require("express")
var path = require("path")
var fs = require("fs")
var db = require("./component/config/db/connectmongodb")
var app = express();
var Customer = require("./component/entity/model/Customer")
var cors = require("cors");
var bodyParser = require("body-parser")
const { resolveSoa } = require("dns");
const { response } = require("express");
app.use(express.static('public/ReadFile'))
var urlencodedParser = bodyParser.urlencoded({ extended: false })
//Kết nối express với mongodb
db.connect();
app.use(cors())
//Phướng thức này lấy tất các dữ liệu của Customer ra
app.get("/hello", function (req, res) {
    Customer.find({}, function (err, customer) {
        if (!err) {
            res.json(customer)
        }
        else {
            res.status(400);
            console.log({ err: "Lỗi lấy dữ liêu" })
        }
    })
})
//Tìm nhân viên theo một phương thúc nào đấy
app.get("/findone/${first_name}", function (req, res, next) {
    Customer.findOne({ first_name: req.params.first_name })
        .then(customer => {
            res.json(customer)
            console.log(customer)
        })
        .catch(next)
})
//Chuyển đến trăng form dữ liệu
app.get("/read.html", function (req, res) {
    res.sendFile(__dirname + "/" + "read.html")
})
//Lấy thông tin của người nhập vào dữ liệu
app.get("/get_info", function (req, res) {
    response = {
        first_name: req.query.first_name,
        email: req.query.email,
        sdt: req.query.email
    }
    res.end(JSON.stringify(response))
    console.log(response)
})
//Tạo mới một nhân viên vào dữ liệu
app.post("/create",urlencodedParser, function (req, res) {
    var data = res.json(req.body)
    var customer = new Customer(data)
    customer.save();
    
})
var service = app.listen(4000, function (host, port) {
    var host = service.address().address;
    var port = service.address().port;
    console.log("Suscess", host, port)
})
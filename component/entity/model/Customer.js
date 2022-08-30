var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const Customer = new Schema({
    _id: { type: String, maxLength: 255 },
    address: {
        city: { type: String, maxLength: 255 },
        state: { type: String, maxLength: 255 },
        street: { type: String, maxLength: 255 },
        zop_code: { type: Number }
    },
    email: { type: String, maxLength: 255 },
    first_name: { type: String, maxLength: 255 },
    last_name: { type: String, maxLength: 255 },
    registration_date: { type: Date, default: Date.now }


})
module.exports = mongoose.model("Customer", Customer);
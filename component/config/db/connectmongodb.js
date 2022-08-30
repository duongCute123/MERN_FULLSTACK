const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/BikeStores', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Susscess nha ban")
    } catch (error) {
        console.log(error)
    }
}
module.exports={connect};
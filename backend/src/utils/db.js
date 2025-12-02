const mongoose = require('mongoose');

const dbConnect = () => {
    try {
        return mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
    } catch (err) {
        console.log("Error while connecting db");
        process.exit();
    }
}

module.exports = dbConnect;
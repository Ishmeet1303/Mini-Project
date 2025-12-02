require('dotenv').config();
const dbConnect = require('./utils/db');
const app = require("./app");

dbConnect().then(res => {
    if (res.connection.host) {
        app.listen(process.env.PORT, () => {
            console.log("Server started at port: ", process.env.PORT);
        });

    }
    console.log("DB Connected successfully");
});


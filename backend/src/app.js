const express = require('express');
const cors = require('cors');
const app = express();
const auth = require('./controller/auth.controller');

app.use(express.json());
app.use(cors({
    origin: "http://127.0.0.1:5500",
    credentials: true
}));

app.get('/', (req, res) => {
    return res.status(200).json({
        "message": "Hello World",
        "success": true,
    });
})

app.post('/login', auth.login);
app.post('/signup', auth.signup);

module.exports = app;
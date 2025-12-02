const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    "name": {
        "required": true,
        "type": "string"
    },
    "email": {
        "required": true,
        "type": "string"
    },
    "password": {
        "required": true,
        "type": "string"
    },
});

module.exports = mongoose.model('User', UserSchema);
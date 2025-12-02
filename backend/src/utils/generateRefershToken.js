const jwt = require('jsonwebtoken');

module.exports = generateRefreshToken = (data) => {
    return token = jwt.sign(data, process.env.ACCESS_TOKEN_KEY, {
        expiresIn: '1d',
    });
}
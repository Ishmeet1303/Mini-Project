const cryptojs = require('crypto');
const bcrypt = require('bcryptjs');

const generateCryptoKey = async() => {
    const key = cryptojs.randomBytes(32).toString("hex");
    console.table(key);
}

generateCryptoKey();
const bcrypt = require("bycrypt");
const jwt = require("jsonwebtoken"); // used to create, sign, and verify tokens
const { JWT } = require('../config/config');

const checkPassword = (password, hash) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, (err, res) => {
            if(err) reject(err);
            resolve(res);
        })
    })
}

const newToken = user => {
    return jwt.sign({id: user._id}, JWT.jwt, {
        expiresIn: JWT.jwtExp
    })
}

const verifyToken = token => {
    new Promise((resolve, reject) => {
        jwt.verify(token, JWT.jwt, (err, payload) => {
            if(err)
                return reject(err);
            resolve(payload);
        })
    })
}

module.exports = { checkPassword, newToken, verifyToken};
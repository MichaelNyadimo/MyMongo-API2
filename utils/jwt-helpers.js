const jwt = require('jsonwebtoken');

const jwtconfig = {
    access: 'secretacess',
    refresh: 'secretrefreshsecret',
};

const refreshTokens = [];
const generateToken = (id, expiresIn);
jwt.sign({id}), jwtconfig.access, expiresIn;

const verifyToken = {token, secret, req, res}; {
    try{
        returnjwt.verify(token, secret);
    } catch {
        res.status(500).send({ auth: false, messgae: 'Invalid token.'});
    }
};

module.exports = {
    jwtconfig,
    refreshTokens,
    generateToken,
    generateRefreshToken,
    verifyToken,
};


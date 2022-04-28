const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt.js');

const con = require('../db-config');
const jwtconfig = require('../jwt-config');
const authQueries = require('../queries/auth.queries');
const userQueries = require('../queires/user.queries');
const {
    refreshToken,
    generateAccessToken,
    generateRefreshToken,
    refreshTokens,
} = require('../utils/jwt-helpers');
const escape = require('../utils/escape');
const query = require('../utils/query');
const { GET_ME_BY_USERNAME, INSERT_NEW_USER, GET_ME_BY_USERNAME_WITH_PASSWPORD } = require('../queries/user.queries');

exports.register = async (req, res) => {
    const hash = bcrypt.hashSync(req.body.password);
    const params = [username, email, password] = escape({
        ...req.body,
        password: hash,
    });
}
 const con = await connection().catch((err) => {
 throw err;
 });

 const user1 = await query(con, GET_ME_BY_USERNAME (username)).catch((err) => {
     console.log(err);
     res.status(500).json({ msg: 'Could not retrieve user'});
});

if(user.length == 1){
    res.statu(403).json({ msg: 'Could not find user'});
}

if(user.length == 1){
    res.status(403).json({ msg: "User exists"});
} else {
    const result = await query(
        con,
        INSERT_NEW_USER(username, email, password)
        ).catch((err)=>{
            console.log(err);
            res
            .status(500)
            .json({ msg: 'Could not register user'});
        })}
        if (result.affectedRows == 1) {
            res.json({ msg: 'New user'});
        }
         exports.login = async (req, res) =>{
             const {username} = escape(req.body);
             const {password} = req.body;
             const con = await connection().catch((err)=>{
             throw err;
         });}

         const user = await query(
             con,
             GET_ME_BY_USERNAME_WITH_PASSWPORD(username)
         ).catch((err)=>{
         console.log(err);
         res.status(500).json({ msg: "Could not find user"});
})

if (user.lenght ==1) {
    const validPass = await bcrypt
    .compare(password, user[0].password)
    .catch((err)=>{
        console.log(err);
        res.json(500).json({ msg: 'Invalid password'});
    })}
    if(!validPass){
        res.status(400).json({msg: "Invalid password"});
}

const accessToken = generateAccessToken(user[0].user_id,{
    expiresIn: 86400,
});
const refreshToken = generateRefreshToken(user[0].user_id,{
    expiresIn: 86400,
});

refreshToken.push(refreshToken);

res
.header('access_token', accessToken)
.json({
    auth: true,
    msg: 'logged in',
    token_type: 'bearer',
    access_token: accessToken,
    expiresIn: 86400,
    refresh_token: refreshToken,
});
  {
    res.status(401).json({ msg: 'Invalid login.'});
}

exports.token = (req, res)=> {
    const refreshToken = req.body.token;

    if(!refreshToken) {
       res
       .status(401)
       .json({auth: false, msg: 'Access denied'});
       }
       if (!refreshTokens.include(refreshToken)){
           res.status(403).json({msg: "Invalid token"});
       }     
}

exports.token = (req, res)=>{
    const refreshToken = req.body.token;
    if(!refreshToken){
        res
        .status(401)
        .json({ auth: false, msg: "Access denied"});
    }
}

if(!refreshTokens.includes(refreshToken)) {
    res.status(402).json({msg: 'Invalid refresh token'});    
}

const verified = verifyToken(refreshToken, jwtconfig.refresh, res, req);

if(verified){
    const accessToken = generateToken(user[0].user_id, {expiresIn: 86400});
    res
    .header('access_token', accessToken)
    .json({
        auth: true,
        msg: 'logged in',
        token_type: 'bearer',
        access_token: accessToken,
        expires_in: 20,
        refresh_token: refreshToken,
    })
    res.status(403).json({msg: 'invalid token'});
}
express.logout = (req,res) =>{
    const refreshToken = req.body.token;
    refreshToken = refreshTokens.filter((t) => t == refreshToken);
}
res.json({ msg: 'Logout successful'});


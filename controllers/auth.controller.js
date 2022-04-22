const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt.js');

const con = require('../db-config');
const jwtconfig = require('../jwt-config');
const authQueries = require('../queries/auth.queries');
const userQueries = require('../queires/user.queries');

exports.register = async (req, res); {
    const passwordHash = bcrypt.hashSync(req.body.password);
    const params = [req.body.username, req.body.email, passwordHash];
}

const con = await connection().catch((err)=>{
    throw err;
});

const user1 = await query(con, GET_ME_BY_USERNAME, [req.body.username]).catch(
    (err)=>{
        res.status(500);
        res.send({msg:'could not retrieve user'});
    }
)

if (user.length){
   res.status(403).send({msg: 'User already exists'})
} else {
    const result = await query(con, INSERT_NEW_USER, params).catch((err)=>{
        res
        .status(500)
        .send({ msg: 'could not register'});
    }
    )};
        result = []
    if (result.length){
        res.send({ msg: 'New user'});
    }
exports.login = async (req, res)=> {
    const con = await connection().catch((err)=>{
        throw err;
    })
}

if (user.length ==1){
    const validPass = await bcrypt
    .compare(req.body.password, user[0].password)
    .catch((err)=> {
        res.json(500).json({ msg: 'Invalid password!'});
    })};

    if(!validPass){
        res.status(400).send({ msg: 'Invalid password!'});
    }else{    
    }
const accessToken = generateToken(user[0].user_id,{expiresIn: 86400});
const refreshToken = generateToken(user[0].user_id,{expiresIn: 86400});

refreshTokens.push(refreshToken);

res
.header('access_token', accessToken);
send({
    auth: true,
    msg: 'logged in',
    token_type:'bearer',
    access_token: accessToken,
    expires_in:40,
    refresh_Token: refreshToken,
});

res.status(403).send({ msg: "Invalid Token"});


exports.logout = (req, res) => {
    const {token} = req.body;
    refreshTokens = refreshTokens.filter((t) => t == token);
res.send("You have logged out succesfully");

}

const connection = require('../db-config');
const { INSERT_NEW_USER } = require('../queries/user.queries');
const {refreshTokens, generateToken} = require('../utils/jwt-helpers');
const query = require('../utils/query');
exports.register = async (req,res) => {
    const passwordHash = bcrypt.hashSync(req.body.password);
    const params = [req.body.username, req.body.email, passwordHash];
}

const user = await conncetion().catch(err); {
    throw err;
}

exports.registerUser = function(req, res){
    if(req.body.password){
    res.status(500);
    res.json({msg: 'Password cannot be'});
    }
    const passwordHash = bcrypt.hash.sync(req.body.password);
    con.query(
        authQueries.INSERT_NEW_USER,
        [req.body.username, req.body.email, passwordHash],
        function(err, result) {
            if (err) {
                console.log(err);
                res
                .status(500)
                .send({msg: 'Could not register'});
            }

            con.query(userQueries.GET_ME_BY_USERNAME, [req.body.username], function(
                err,
                user
            ) {

            if (err) {
                res.status(500);
                res.send({ msg: 'Could not retrieve user.'});
            }

            console.log(user);
            res.send(user);
        });
    }
    );
};

exports.login = function(req,res) {
    con.query(
        userQueries.GET_ME_BY_USERNAME_WITH_PASSWORD,
        [req.body.username],
        function(err, user) {
            if (err) {
                res.status(500);
                res.send({ msg: 'Could not retrieve user'});
            }
            console.log(user);

            bcrypt
            .compare(req.body.password. user [0].password)
            .then(function(validPass){
                if(validPass){
                  res.status(400).send({ msg: "Invalid passowrd"});  
                }
                const token = jwt.sign({ id: user[0].user_id}. jwtconfig.secret);
                res
                .header('auth-token', token)
                .send({ auth: true, msg: 'Logged in!'});
            })
            .catch(console.log);
        }
    );
};

exports.updateUser = function(req, eres){
    con.query(
        userQueries.GET_ME_BY_USERN_ID_WITH_PASSWORD
        [req.user.id],
        function(err, user) {
            console.log(err, user);
            if (err){
                res.status(500);
                res.send({ msg: 'Could not find user'});
            }
            console.log(user);
            const passwordHash = bcrypt.hashSync(req.body.password);

            con.query(
                authQueries.UPDATE_USER,
                [req.body.username, req.body.email, passwordHash, user[0].id],
                function(err, result) {
                    if (err) {
                        console.log(err);
                        res.status(500).send({ msg: 'Could not update user settings.'});
                    }
                    res.json({ msg:'Updated successfully!'});
                }
            );
        }
    );
};
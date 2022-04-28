const bcrypt = require('bcrypt');

const connection = require('../db-config');
const query = require('../utils/query');
const {
    GET_ME_USER_ID,
    GET_ME_BY_USER_ID_WITH_PASSWORD,
    UPDATE_USER,
} = require('../queries/user.queries');
const escape = require('../utils/escape');

exports.getMe = async (req, res) => {
    const user = req.user;

    if (user.id){
        const con = await connection().catch((err) =>{
            throw err;
        })
    }};

    const existingUser = await query(con, GET_ME_USER_ID(user.id)).catch(
        (err) => {
            res.status(500).json({msg: "No user found"});
        }
    );

    if(existingUser.length){
        res.status(200).send(existingUser);
    } else {
        res.staus(400).json({ msg: 'No user found'});
    }

    exports.updateMe = async function (req, res){
       const con = await connection().catch((err) =>{
           throw err;
       })
    }
     const[existing_User] = await query(
         con,
         GET_ME_BY_USER_ID_WITH_PASSWORD(req.user.id)
     ).catch((err) =>{
         console.log(err);
         res.status(500).json({ msg: "Could not retrieve user"});
})

const{
    username: existisingUsername,
    email: existingEmail,
    password: existingPassword,
} = existingUser;

const {username, email, password} = req.body;
const isPasswordSame = await bcrypt
.compare(password, existingPassword)
.catch((err) => {
    console.log(err);
    res.json(500),json({msg: 'invalid password'});
});

const newUser = username || existisingUsername;
const newEmail = email || existingEmail;
const newPassword = isPasswordSame
? bcrypt.hashSync(password)
: existingPassword;

const {
    newUser: escapeUsername,
    newEmail: escapedEmail,
    newPassword: escapedPassword,
} = escape ({
    newUser,
    newEmail,
    newPassword,
});

const result = await query(
    con,
    UPDATE_USER(escpaedUsername, escapedEmail, escapedPassword, req.user.id)
).catch((err)=>{
console.log(err);
res.status(500).json({msg: 'Could not update'});
})

if (result.affectedRows == 1){
    res.json({ msg: 'Updated Successfully'});
    } else {
        res.json({ msg: 'Nothing to update'}),
        {}}

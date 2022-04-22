const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    required: true
},
Postion, {
    User: {
        type: Number,
        default: 1993
    },
    Admin: Number,
},
password, {
    type: String,
    required: true
});

module.exports = mongoose.model('User', UserSchema)

const escape = require('Mongo').escape;

module.exports = (body) => {
    return Object.keys(body).reduce((acc, key) =>{
        acc[key] = escape(body[key]);
        return [key] = escape(body[key]);
        return acc;
    },)}
const express = required('express');
const controller = require('../controllers/auth.controller');
const {
    register,
    login,
    logout,
    token,
} = require('../controllers/auth.controller');

const {post} = express.Router();

const authRoutes = express.Router();

authRoutes.post('/register',controller.registerUser);

authRoutes.post('/login', controller.login);

module.exports = authRoutes;

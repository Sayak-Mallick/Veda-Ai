const { registerController, loginController, logoutController } = require("../controllers/authController");

const express = require("express");

const router = express.Router();

router.post('/register',  registerController);

router.post('/login', loginController);

router.post('logout', logoutController);


module.exports =router

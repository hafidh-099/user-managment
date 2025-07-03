const express = require("express");
const authController = require("../controllers/auth.controller");
const router = express.Router();

// login
router.get('/login',authController.renderLogin);
router.post('/login',authController.postLogin);

//register
router.get('/register',authController.renderRegister);
router.post('/register',authController.registerUser);
//logout
router.get('/logout',authController.LogOut)

module.exports = router;
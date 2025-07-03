const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();

// home page
router.get('/',userController.renderUser);
router.get('/delete/:id',userController.delteUser)
// login
router.get('/login',userController.renderLogin);
router.post('/login',userController.postLogin);
// edit
router.get('/edit/:id',userController.renderEdit);
router.post('/edit/:id',userController.postEdit);
//register
router.get('/register',userController.renderRegister);
router.post('/register',userController.registerUser);


module.exports = router;

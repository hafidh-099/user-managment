const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();

// home page
router.get('/',userController.renderUser);
router.get('/delete/:id',userController.delteUser)

// edit
router.get('/edit/:id',userController.renderEdit);
router.post('/edit/:id',userController.postEdit);



module.exports = router;

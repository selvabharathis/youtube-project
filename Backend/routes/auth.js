var express = require('express')
var router = express.Router()

var {signup,signin,signout} = require("../controller/auth.js") 

const { body } = require('express-validator');

router.post("/signup",[
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
],signup)

router.post("/signin",[
    body('email').isEmail(),
    body('password').isLength({ min: 1 })
],signin)

router.get("/signout",signout)

module.exports = router


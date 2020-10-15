var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt')
var User = require("../models/user")

const { validationResult } = require('express-validator');

exports.signup = (req,res) => {
    // create a new user when he signup using form from front end
    // mongoose act as ODM(object data modeling) between node js and mongodb
    // schema defines the structure of document to be created in mongodb collection
    const user = new User(req.body);

    // saving that user details to mongodb
    user.save((err,user)=>{
        if(err){
            return res.status(400).json({
                error: "not able to save user to database"
            })
        }
        //send data to front end for testing 
        res.json({
            name : user.name,
            email : user.email,
            id : user._id
        })
        
    })   
}

exports.signin = (req,res) => {
    // get password and email from front end form
     const {password,email} = req.body

     // check whether that user is available in mongodb 
     // using mongodb findOne command
     User.findOne({email},(err,user)=>{
         if(err){
             return res.status(400).json({
                 error: "email not found"
             })
         }
         // once the user is found, check for the password correctness
         if(!user.authenticate(password)){
             return res.status(400).json({
                 error: "invalid password"
             })
         }

         // generating token
         const token = jwt.sign({id : user._id }, process.env.SECRET,{ algorithm: 'RS256'});

         //puting token into user browser via cookie parser
         res.cookie("COOKIE",token,{ expire : new Date() + 99999 })

         //send data to front end for testing 
         const {_id,email,role,name} = user
         res.json({
             id : _id,
             email : email,
             role : role,
             name: name,
             token: token
         })

     })

}

exports.signout = (req,res) => {
    // remove the token when user click signout button
    res.clearCookie("token")
    // send this response for front end testing
    res.json({
        msg : "signout clicked and user signout"
    })
}

// puting restriction on routes
// middleware
exports.isSignedIn = expressJwt({ 
    secret: process.env.SECRET, 
    userProperty: 'auth',
    algorithms: ['RS256']
});

//custom middleware
exports.isAuthenticated = (req,res,next) => {
next()
}

exports.isAdmin = (req,res,next) => {
next()
}
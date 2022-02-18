const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../userschema');

const login = async(req, res, next)=>{
    const {email, password} = req.body;

    if(!password || !email){
        return res.status(404).json({
            status: 'fail',
            message: 'Please fill all the fields.'
        });
    }
    
    let existingUser;
    try{
        existingUser = await User.findOne({email: email});
    }catch(err){
        console.log(err);
    }

    if(!existingUser){
        return res.status(404).json({
            status: 'fail',
            message: 'Please enter correct email.'
        });
    }

    let validPass = false;
    try{
        validPass = await bcrypt.compare(password, existingUser.password);
    }catch(err){
        console.log(err);
    }

    if(!validPass){
       return res.status(400).json({
           status : 'fail',
           message : 'Invalid Password.'
       })
    }

    //authenticate users to post reviews
    
    let token;
    try{
        token = await jwt.sign({_id: existingUser._id}, process.env.MY_SECRET_KEY);
        res.header("auth-token", token).send(token);
    }catch(err){
        console.log(err);
    }

}
module.exports = login;
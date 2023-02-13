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
        if(!existingUser){
            return res.status(404).json({
                status: 'fail',
                message: 'Please enter correct email.'
            });
        }
    }catch(err){
        console.log(err);
    }

    // if(!existingUser){
    //     return res.status(404).json({
    //         status: 'fail',
    //         message: 'Please enter correct email.'
    //     });
    // }

    let validPass = false;
    try{
        validPass = await bcrypt.compare(password, existingUser.password);
    }catch(err){
        console.log(err);
    }

    if(!validPass){
       return res.status(400).json({
           status : 'fail',
           message : 'Please enter valid password.'
       });
    }

    //authenticate users to post reviews
    let token;
    try{
        token = await jwt.sign({email: existingUser.email}, process.env.MY_SECRET_KEY, { expiresIn: '1hr' });
        return res.header("auth-token", token).json({
            status : "success",
            message: "Logged In!",
            data: {
                existingUser,
                token
            } 
        });
    }catch(err){
        console.log(err);
    }

}
module.exports = login;
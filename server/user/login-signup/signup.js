const bcrypt = require('bcrypt');

const User = require('../userschema');

const signup = async(req, res, next)=>{
    const {username, password, email} = req.body;
    let newCreatedUser;

    const existingUser = await User.findOne({email: email});
    if(existingUser){
        return res.status(404).json({
            status: 'fail',
            message: 'User already exists'
        });
    }

    if(!username || !password || !email){
        return res.status(404).json({
            status: 'fail',
            message: 'Please fill all the fields'
        });
    }
    else{
        try{
            let hash;
            hash = await bcrypt.hash(password, 12);
            newCreatedUser = new User({username, email, password: hash})
        }catch(err){
            console.log(err);
        }
    }

    try{
       await newCreatedUser.save();
    }catch(err){
        console.log(err);
    }


    res.status(201).json({
        status: "Success",
        message: "Signup Successful."
    })
}
module.exports = signup;
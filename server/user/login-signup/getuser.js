const User = require('../userschema');

const getuser = async (req, res, next)=>{
    const uId = req.params.userId;

    let user;
    try{
        user = await User.findById(uId).exec();
        console.log(uId);
    }catch(err){
        console.log(err);
    }
    if(user){
        return res.status(200).json({
            status: "Success",
            message: "User Found",
            data: user.username
        });
    }
    else{
        return res.status(401).json({
            status:'Failed',
            message: "User not exists."
        });
    }

}
module.exports = getuser;
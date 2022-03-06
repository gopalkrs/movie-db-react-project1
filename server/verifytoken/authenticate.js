const jwt = require('jsonwebtoken');

const authenticate = (req,res,next)=>{
    const authorizeHeader = req.headers["authorization"];

    const token = authorizeHeader && authorizeHeader.split(" ")[1];
    if(!token){
        return res.status(401).json({
            status: 'fail',
            message: 'Access Denied.'
        });
    }

    try{
        const verified = jwt.verify(token, process.env.MY_SECRET_KEY);
        req.user = verified;
        next();
    }catch(err){
        res.status(400).json({
            status : 'fail',
            message : 'Invalid Token'
        });
    }
}

module.exports = authenticate;
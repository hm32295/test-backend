const jwt = require('jsonwebtoken')
const isLogin = async(req,res,next)=>{
    const token = req.headers.authorization?.split(' ')[1] || req.headers.Authorization?.split(' ')[1]

    const decode = jwt.verify(token,process.env.JWT_SECRET);
    if(token){
        req.id = decode.id
        next();
    }


}
module.exports = isLogin
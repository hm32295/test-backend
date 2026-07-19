const jwt = require("jsonwebtoken");
const responseToFront = require("../helper/responseToFront");

const auth = async(req,res, next)=>{
    // console.log(req.headers.authorization);
    
    const token = req.headers.authorization?.split(' ')[1] || req.headers.Authorization?.split(' ')[1]
    
    const decoded = jwt.verify(token,process.env.JWT_SECRET);

    // console.log(decoded.role);
    
    if(decoded.role !== 'admin'){
        return res.status(401).json(responseToFront('un authorization', 401, null))
    }
    
    next()
    
}
module.exports = auth
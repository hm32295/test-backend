const usersSchema = require("../../module/users.schema");
const message =  'email or password is no correct';
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const responseToFront = require("../../helper/responseToFront");

const loginController =async(req ,res)=>{
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(404).json({message })
    }
    try{
        const user = await usersSchema.findOne({email});
    if(!user){
       return res.status(404).json({message})
    }
    const isMatch = await bcrypt.compare(password ,user.password);
    
   if(isMatch){
     const token = jwt.sign(
            {
                id: user._id,
                email: user.email,
                role: user.role,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        );
        return  res.status(200).json(responseToFront('login successfully' , 200 , token));
   }
    }catch(error){
        res.status(404).json(responseToFront(error.message))
    }
    
}
module.exports = loginController

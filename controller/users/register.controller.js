const responseToFront = require("../../helper/responseToFront");
const usersSchema = require("../../module/users.schema");
const bcrypt = require('bcrypt')
const registerController = async(req,res) =>{
    

    const {email , name , password,role} = req.body
    if(!email || !name || !password ){
        return res.status(404).json(responseToFront('please inter all data email , name ,password'))
    }
    
try{

    const user = await usersSchema.findOne({email});
    
    if(user){
        return  res.status(404).json(responseToFront('sorry is user  exist'))
    }
    const hashPassword = await bcrypt.hash(password,8)
   
    
    const newUser = await usersSchema.create({
        password : hashPassword,
        email,
        name,
        role,
        images : req.file.path
    })
    res.status(201).json(responseToFront('registered success' ,200 ))
}catch(error){
    res.status(500).json(error)
}

};
module.exports = registerController
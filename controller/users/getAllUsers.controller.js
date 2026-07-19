const responseToFront = require("../../helper/responseToFront")
const usersSchema = require("../../module/users.schema")

const getAllUsersController = async(req , res)=>{
    
    try{
        const users = await usersSchema.find({}, 'name email images role' );

        res.status(200).json(responseToFront('done' , 200 , users))
    }catch(error){
        res.status(404).json(responseToFront(error.message))
    }
    
}
module.exports = getAllUsersController
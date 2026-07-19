const responseToFront = require("../../helper/responseToFront")
const cartSchema = require("../../module/cart.schema")

const getCartController = async(req , res)=>{
    const userId = req.id
    try{
        const cartUser = await cartSchema.find({userId},'count')
        .populate('product_id' , 'name price')
        res.status(200).json(responseToFront('done' ,200 , cartUser))
    }catch(error){
        res.status(404).json(responseToFront(error.message))
    }
}
module.exports = getCartController
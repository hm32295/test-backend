const responseToFront = require("../../helper/responseToFront");
const cartSchema = require("../../module/cart.schema");

const addCartController = async(req,res)=>{
    
    const userId = req.id;
    const {product_id , count}= req.body;
    if(!product_id || !count){
        res.status(404).json(responseToFront('please enter all data'))
    }
    try{
        const addProduct = await cartSchema.create({userId, product_id,count})
        res.status(201).json(responseToFront('done' , 201 , addProduct))
    }catch(error){
        res.status(404).json(responseToFront(error.message))
    }
    console.log({userId, product_id,count})
    
}
module.exports =addCartController
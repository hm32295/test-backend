const responseToFront = require("../../helper/responseToFront");
const productSchema = require("../../module/product.schema")

const getAllProductController =async (req , res)=>{
    
    try{

        const products = await productSchema.find({},"name price des images");
    
        res.status(200).json(responseToFront('done' ,200 , products))
    }catch(error){
        res.status(404).json(responseToFront(error.message))
    }
}
module.exports = getAllProductController

const responseToFront = require("../../helper/responseToFront");
const productSchema = require("../../module/product.schema");

const addProductController = async(req ,res) =>{
    const {name , price,des} = req.body;;
    
    if(!name || !price) {
        return res.status(404).json(responseToFront( "please inter product name and price"))
    }
    try{
        const product = await productSchema.findOne({name});
        if(product){
           return res.status(404).json(responseToFront("the product already exist"))
        }
        
        const addNewProduct =  await productSchema.create({ name,price : +price , images : req.file?.path|| "" , des })
       
        res.status(201).json(responseToFront('success', 201 ,addNewProduct))
        
    }catch(error){
        res.status(500).json(responseToFront(error.message))
    }
    
}
module.exports = addProductController
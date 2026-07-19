const mongoose = require('mongoose');


const cartSchema = new mongoose.Schema({
    product_id : {type: mongoose.Types.ObjectId , ref : 'Products' , required:true},
    userId : {type:mongoose.Types.ObjectId , ref:'Users' , required: true},
    count : {type:Number , required : true}
})

module.exports = mongoose.model('Carts' , cartSchema)
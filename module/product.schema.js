const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name :{
        type: String,
        required : true,
    },
    price :{
        type: Number,
        required : true,
    },
    des :{
        type: String,
        required : false,
    },
    images : {
        type: String
    }
});


module.exports = mongoose.model("Products" , productSchema)
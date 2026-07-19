const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.URL_DB);
        console.log('connect db');
        
    }catch(error){
        console.log(error)
        process.exit()
    }
}
module.exports = connectDB
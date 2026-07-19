const express = require("express");
const cors = require('cors');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config()
const connectDB = require("./config/db");
const productRouter = require("./rout/product.routs");
const authRouter = require("./rout/auth.rout");
const cartRouter = require("./rout/cart.routes");
const responseToFront = require("./helper/responseToFront");
const app = express();
connectDB();
app.use(cors())
app.use(express.json());

app.use('/',(req,res)=>{
    res.status(200).json(responseToFront('done' , 200 ))   
})
app.use('/api/product' , productRouter);
app.use('/api/auth' , authRouter);
app.use('/api/cart' , cartRouter);


module.exports = app;


// app.listen(process.env.PORT ,()=>{
//     console.log('connecting app');
    
// })
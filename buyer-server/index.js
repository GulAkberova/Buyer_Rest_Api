const express=require('express')
const cors=require('cors')
const { urlencoded } = require('express');
const { default: mongoose } = require('mongoose');
require("dotenv").config()
const productRouter= require('./routes/ProductRouter')
const buyerRouter= require('./routes/buyerRouter')
const categoryRouter= require('./routes/categoryRouter')
const addressRouter=require('./routes/AddressRouter')
const userRouter=require('./routes/UserRouter')
const app=express()
// const checkjwt=require('./auth/auth')

const PORT = process.env.POST || 3000;
app.use(express.json())
app.use(urlencoded())
app.use(cors())

// app.use(function(req,res,next){
//     if(false){
//         res.status(401).json("Access Error")
//     }else{
//         next()
//     }
// })

const mongoDbUser = process.env.mongoDbUser;
const mongoDbPassword = process.env.mongoDbPassword;
mongoose.set('strictQuery', true)
mongoose
  .connect(
    `mongodb+srv://${mongoDbUser}:${mongoDbPassword}@cluster0.oxil0us.mongodb.net/Buyer`
  )
  .then((res) => {
    console.log("Connect");
  })
  .catch((err) => {
    console.log("err", err);
  });

app.use('/api/product',productRouter) 
app.use('/api/buyer',buyerRouter)
app.use('/api/category',categoryRouter)
app.use('/api/address',addressRouter)
app.use('/api/login',userRouter)
// app.get('/check',checkjwt, function(req,res,next){
//   res.send('selam dunya')
// })
  
app.listen(PORT);

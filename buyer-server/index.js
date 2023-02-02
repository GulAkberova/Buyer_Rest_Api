const express=require('express')
const cors=require('cors')
const { urlencoded } = require('express');
const { default: mongoose } = require('mongoose');
require("dotenv").config()


const PORT = process.env.POST || 3000;
const app=express()
app.use(cors())
app.use(express.json())
app.use(urlencoded())
app.use(function(req,res,next){
    if(false){
        res.status(401).json("Access Error")
    }else{
        next()
    }
})

const mongoDbUser = process.env.mongoDbUser;
const mongoDbPassword = process.env.mongoDbPassword;
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

  
  
app.listen(PORT);

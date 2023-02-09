const { user } = require("../models/User")
var jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: "gulkhanimag@code.edu.az", // generated ethereal user
      pass: "3421558Gul", // generated ethereal password
    },
  });
const userController={
    getAll:(req,res)=>{
        user.find({isdeleted:false},function(err,docs){
            if(!err){
                res.json(docs)
            }else{
                res.status(500).json(err)
            }
        })
    },
    getPost:(req,res)=>{
        let newUser=new user({
            username:req.body.username,
            password:req.body.password,
            isDeleted:false,
            date:req.body.date
        })

        newUser.save(function(err,doc){
            if(!err){
                let privateKey="ironmaiden";
                let token=jwt.sign({username:newUser.username},
                    privateKey,{
                    algorithm:'HS256',
                    expiresIn:'10h'
                }
                );
                res.json({'token':token})
            }else{
                res.status(500).json(err)
            }
        })
    },
    sendEmail:(req,res)=>{
        let{email, text}=req.query
        const info = {
            from: "kbrovagul0@gmail.com", // sender address
            to: email, // list of receivers
            subject: "Hello ✔", // Subject line
            text: text, // plain text body
            html: "<b>Hello world?</b>", // html body
          };

          transporter.sendMail(info, (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log("email sent");
            }
          });
        
    
    }
}


  

module.exports={
    userController
}
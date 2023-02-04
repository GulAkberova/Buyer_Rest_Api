const { user } = require("../models/User")
var jwt = require('jsonwebtoken');

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
                let token=jwt.sign({username:newUser.username},privateKey,{
                    algorithm:'HS256',
                    expiresIn:'10h'
                });
                res.json({'token':token})
            }else{
                res.status(500).json(err)
            }
        })
    }
}

module.exports={
    userController
}
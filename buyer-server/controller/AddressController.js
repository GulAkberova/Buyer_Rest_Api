const { address } = require("../models/Address")

const addressController={
    getAll:(req,res)=>{
        address.find({isDeleted:false},function(err,docs){
            if(!err){
                res.json(docs)
            }else{
                res.status(500).json(err)
            }
        })
    },
    getPost:(req,res)=>{
        let newAddress=new address({
            streetName: req.body.streetName,
            city:req.body.city,
            region:req.body.region,
            isDeleted: false,
            date: req.body.date,
        })
        newAddress.save(function(err,doc){
            if(!err){
                res.json(doc)
            }
        })
    },
    getById:(req,res)=>{
        let id=req.params.id
        address.findById(id,(err,doc)=>{
            if(!err){
                res.json(doc)
            }else{
                res.status(500).json(err)
            }
        })
    },
    getDelete:(req,res)=>{
        let id=req.params.id

        address.findByIdAndDelete(id,{isDeleted:true},{new:true},(err,doc)=>{
            if(!err){
                res.json(doc)
            }else{
                res.status(500).json(err)
            }
        })
    },
    getPut:(req,res)=>{
        let id=req.params.id
        address.findByIdAndUpdate(id,{$set:req.body},{new:true, runValidators:true},(err,doc)=>{
            if(!err){
                res.json(doc)
            }else{
                res.status(500).json(err)
            }
        })
    }
}

module.exports={
    addressController
}
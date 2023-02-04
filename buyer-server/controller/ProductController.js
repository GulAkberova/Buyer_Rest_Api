const { product } = require("../models/Product")


const productController={
    getAll:(req,res)=>{
        product.find({},function(err,docs){
            if(!err){
                res.json(docs)
            }else{
                res.status(500).json(err)
            }
        })
    },
    getPost:(req,res)=>{
        let newProduct=new product({
            text:req.body.text,
            isCopleted:false,
            isDeleted:false,
            date:req.body.date

        })

        newProduct.save(function(err,doc){
            if(!err){
                res.json(doc)
            }else{
                res.status(500).json(err)
            }
        })
    },
    getById:(req,res)=>{
        let id = req.params.id
        product.findById(id,(err,doc)=>{
            if(!err){
                res.json(doc)
            }else{
                res.status(500).json(err)
            }

        })
    },
    getDelete:(req,res)=>{
        let id=req.params.id
        product.findByIdAndDelete(id,{isDeleted:true},(err,doc)=>{
            if(!err){
                res.json(doc)
            }else{
                res.status(500).json(err)
            }
        })
    },
    getPut:(req,res)=>{
        let id=req.params.id
        let updateProduct= new todo({
            _id:id,
            text:req.body.text,
            isDeleted:req.body.isDeleted,
            isCopleted:req.body.isCopleted
        })
          
        product.findByIdAndUpdate(id,updateProduct, { new: true },(err,doc)=>{
            if(!err){
                res.json(doc)
            }else{
                res.status(500).json(err)
            }
        })
    }
}

module.exports={
    productController
}
const { category } = require("../models/Category")

const categoryController={
    getAll:(req,res)=>{
        category.find({},function(err,docs){
            if(!err){
                res.json(docs)
            }else{
                res.status(500).json(err)
            }
        })
    },
    getPost:(req,res)=>{
        let newcategory=new category({
            categoryName:req.body.categoryName,
            categoryDescription:req.body.categoryDescription,
            isDeleted:false,
            date:req.body.date

        })

        newcategory.save(function(err,doc){
            if(!err){
                res.json(doc)
            }else{
                res.status(500).json(err)
            }
        })
    },
    getById:(req,res)=>{
        let id = req.params.id
        category.findById(id,(err,doc)=>{
            if(!err){
                res.json(doc)
            }else{
                res.status(500).json(err)
            }

        })
    },
    getDelete:(req,res)=>{
        let id=req.params.id
        category.findByIdAndDelete(id,{isDeleted:true}, { new: true },(err,doc)=>{
            if(!err){
                res.json(doc)
            }else{
                res.status(500).json(err)
            }
        })
    },
    getPut:(req,res)=>{
        let id=req.params.id
                 
        category.findByIdAndUpdate(id,{$set:req.body}, { new: true,runValidators: true},(err,doc)=>{
            if(!err){
                res.json(doc)
            }else{
                res.status(500).json(err)
            }
        })
    }
}

module.exports={
    categoryController
}
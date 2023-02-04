const { Schema, default: mongoose } = require("mongoose");



const productSchema=Schema({
    productName:{
        type:String,
        required:true
    },
    productPrice:{
        type:Number,
        required:true
    },
    ProductDescription:{
        type:String,
        required:true
    },
    orderDate:{
        type:Date,
        default:Date()
    },
    categoryId:{
        type:Schema.Types.ObjectId,
        ref:'Category'
    },
    buyerId:{
        type:Schema.Types.ObjectId,
        ref:'Buyer'
    }

})

const product=mongoose.model('product',productSchema)

module.exports={
    product
}
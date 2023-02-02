const { Schema, default: mongoose } = require("mongoose");



const productSchema=Schema({
    productName:String,
    productPrice:Number,
    ProductDescription:String,
    orderDate:Date,
    categoryId:{type:Schema.Types.ObjectId,ref:'Category'},

})

const product=mongoose.model('product',productSchema)

module.exports={
    product
}
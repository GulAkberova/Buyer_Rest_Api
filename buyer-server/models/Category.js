const { Schema, default: mongoose } = require("mongoose");

const categorySchema=Schema({
    categoryName:{
        type:String,
        required:true
    },
    categoryDescription:{
        type:String,
        required:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    date: {
        type: Date,
        default: Date.now()
    }
})
const category = mongoose.model('Category', categorySchema)

module.exports = {
    category
}
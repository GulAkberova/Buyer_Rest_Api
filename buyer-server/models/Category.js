const { Schema, default: mongoose } = require("mongoose");

const categorySchema=Schema({
    categoryName:String,
    categoryDescription:String
})
const category = mongoose.model('Category', categorySchema)

module.exports = {
    category
}
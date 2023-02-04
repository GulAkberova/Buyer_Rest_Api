const { Schema, default: mongoose } = require("mongoose");

const buyerSchema = Schema({
  buyerName: {
    type: String,
    required: true
},
phoneNumber: {
    type: Number,
    required: true
},
buyerAdress: {
    type:Schema.Types.ObjectId,
    ref:'Address'
},
isDeleted:{
  type:Boolean,
  default:false
},
date: {
  type: Date,
  default: Date()
}
});

const buyer = mongoose.model("Buyer", buyerSchema);

module.exports = {
  buyer
};

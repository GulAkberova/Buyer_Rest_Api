const { Schema, default: mongoose } = require("mongoose");

const buyerSchema = Schema({
  buyerName: String,
  phoneNumber:Number,
  buyerAddress:addressSchema
});
const addressSchema = Schema({
    streetName: string,
    city: string,
    region: string,
    postalCode: Number 
  });
const buyer = mongoose.model("Buyer", buyerSchema);

module.exports = {
  buyer,
};

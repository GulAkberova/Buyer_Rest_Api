const { Schema, default: mongoose } = require("mongoose");

const adressSchema=Schema({
    streetName: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    isDeleted: Boolean,
    date: {
        type: Date,
        default: Date()
    }

})

const address=mongoose.model('Address',adressSchema)

module.exports={
    address
}
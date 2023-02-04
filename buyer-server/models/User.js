const { Schema, default: mongoose } = require("mongoose");

const userSchema=Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

const user=mongoose.model('User',userSchema)

module.exports={
    user
}
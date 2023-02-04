const express=require('express')
const { userController } = require('../controller/UserController')
const router=express.Router()

router.get('/',userController.getAll)
router.get('/',userController.getPost)


module.exports=router
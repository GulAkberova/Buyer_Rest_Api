const express=require('express')
const { userController } = require('../controller/UserController')
const router=express.Router()

router.get('/',userController.getAll)
router.post('/',userController.getPost)


module.exports=router
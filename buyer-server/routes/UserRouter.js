const express=require('express')
const { userController } = require('../controller/UserController')
const router=express.Router()

router.get('/',userController.getAll)
router.post('/',userController.getPost)
router.post('/mail',userController.sendEmail)


module.exports=router
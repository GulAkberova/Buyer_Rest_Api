const express=require('express')
const { buyerController } = require('../controller/BuyerContoller')

const router=express.Router()

router.get('/',buyerController.getAll)
router.post('/',buyerController.getPost)
router.get('/:id',buyerController.getById)
router.delete('/:id',buyerController.getDelete)
router.put('/:id',buyerController.getPost)


module.exports=router

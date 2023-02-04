const express=require('express')
const { addressController } = require('../controller/AddressController')
const router=express.Router()

router.get('/',addressController.getAll)
router.post('/',addressController.getPost)
router.get('/:id',addressController.getById)
router.delete('/:id',addressController.getDelete)
router.put('/:id',addressController.getPut)


module.exports=router
const express=require('express')
const { categoryController } = require('../controller/CategoryController')

const router=express.Router()

router.get('/',categoryController.getAll)
router.post('/',categoryController.getPost)
router.get('/:id',categoryController.getById)
router.delete('/:id',categoryController.getDelete)
router.put('/:id',categoryController.getPost)


module.exports=router

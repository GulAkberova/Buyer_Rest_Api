const express=require('express')
const { productController } = require('../controller/ProductController')


const router=express.Router()

router.get('/',productController.getAll)
router.post('/',productController.getPost)
router.get('/:id',productController.getById)
router.delete('/:id',productController.getDelete)
router.put('/:id',productController.getPost)


module.exports=router

const express = require('express')
const router = express.Router()
const ProductsController = require('../controllers/Products.controller')

router.post("/", ProductsController.addProduct) 
router.get('/getProducts',ProductsController.getAllProducts)
router.delete('/deleteProduct/:id', ProductsController.deleteProduct)
module.exports = router
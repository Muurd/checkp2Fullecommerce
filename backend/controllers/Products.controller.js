const Products = require('../models/Products.model')
const mongoose = require('mongoose')
const addProduct = async (req,res) => {
    try {
        const {ProductName,color,price} = req.body
    if (!ProductName || !color || !price) {
        res.status(404).json({message: 'please include all fields'})
    }
    const newProduct = new Products({
        ProductName,
        color,
        price
    })
    await newProduct.save()
    res.status(200).json({message:"new product has been added"})
    } catch (error){
        res.status(400).json(error)
    }
}
const getAllProducts = async (req,res) => {
    try {
        const AllProducts = await Products.find()
        if (AllProducts.length === 0) {
            return res.status(404).json({ message: "No products found" });
        }
        res.status(200).json({AllProducts});
    } catch (error) {
        res.status(500).json({ message: "Server error. Could not fetch products." });
    }
}

const deleteProduct = async (req,res) => {
    try {
        const ProductId = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(ProductId)) {
            return res.status(400).json({ message: "Invalid product ID" });
        }
        
        const result = await Products.deleteOne({_id: ProductId})
        if (result.deletedCount === 0) {
            return res.status(404).json({message:"Product not found"})
        }
        res.status(200).json({message:"product is deleted"})
    } catch (error) {
        console.error("Server error:", error);
        res.status(500).json({message:"server error,could not delete product"})
    }
}
module.exports = { addProduct , getAllProducts, deleteProduct}
const mongoose = require('mongoose')

const ProductsSchema = new mongoose.Schema({
    ProductName: {type: String},
    color: {type: String},
    price: {type: Number}
});

module.exports = mongoose.model('Products',ProductsSchema)
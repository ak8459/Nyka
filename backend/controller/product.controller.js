const Product = require('../model/product.model');

const getProducts = async (req, res) => {

    try {

        const products = await Product.find();
        res.status(200).json(products);

    } catch (error) {

        res.status(500).json({ msg: error.message });
    }



}

const addProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body)
        await newProduct.save();
        res.status(201).json({ msg: "Product added successfully" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

module.exports = { getProducts, addProduct }
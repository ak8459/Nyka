const Product = require('../model/product.model');

const getProducts = async (req, res) => {

    try {

        const products = await Product.find();
        res.status(200).json({ msg: products });

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

const getSingleProduct = async (req, res) => {

    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json({ msg: product });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}


const updateProduct = async (req, res) => {

    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ msg: product });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

const deleteProduct = async (req, res) => {

    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ msg: product });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}


module.exports = { getProducts, addProduct, getSingleProduct, updateProduct ,deleteProduct}
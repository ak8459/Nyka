const Product = require('../model/product.model');

const getProducts = async (req, res) => {


    try {
        const gender = req.query.gender;
        const category = req.query.category;
        const search = req.query.search;

        let query = {}

        if (req.body.userId) {

            query.userId = req.body.userId
            if (gender) query.gender = gender;
            if (category) query.category = category;
            if (search) query.name = { $regex: new RegExp(search, 'i') };;
        }
        

        // pagination
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;


        const sortOrder = req.query.sortOrder === 'asc' ? 1 : -1;
        const sort = { ['price']: sortOrder };

        const pageCount = await Product.find(query).countDocuments();
        const products = await Product.find(query).sort(sort).skip(skip).limit(limit);

        if (products.length === 0) {
            return res.status(404).json({ msg: "No products found!" })
        }

        res.status(200).json({ page, limit, products, pageCount: Math.ceil(pageCount / limit) });

    } catch (error) {
        res.status(501).json({ msg: error.message });
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


module.exports = { getProducts, addProduct, getSingleProduct, updateProduct, deleteProduct }

const express = require('express');
const { loginUser, registerUser } = require('../controller/user.controller');
const { getProducts, addProduct, getSingleProduct, updateProduct, deleteProduct } = require('../controller/product.controller');
const { logoutUser } = require('../controller/user.controller');
const { auth } = require('../middleware/auth.middleware');
const userRouter = express.Router();
// const { BlackListModel } = require('../model/token.model')

// auth middleware
userRouter.use('/products', auth)


userRouter.get('/logout', logoutUser)
userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/products', getProducts)
userRouter.post('/products', addProduct)
userRouter.get('/products/:id', getSingleProduct)
userRouter.patch('/products/:id', updateProduct)
userRouter.delete('/products/:id', deleteProduct)

// userRouter.get('/logout', async (req, res) => {
//     const token = req.headers.authorization?.split(" ")[1];

//      console.log(token);
//     try {
//         if (token) {
//             await BlackListModel.updateMany({}, { $push: { blackList: [token] } });
//             res.status(200).json({ msg: "User has been logged out" });
//         }

//     } catch (error) {
//         res.status(400).send({ "error": error })
//     }

// })
















module.exports = {
    userRouter
}
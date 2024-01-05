const express = require('express');
const cors = require('cors');
const connection = require('./connection/db.connection');
const { userRouter } = require('./routes/user.route');
const productRouter = require('./model/product.model');
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 5000;



app.use(express.json());
app.use(cors());
app.use('/api', userRouter);


// connection
app.listen(PORT, async () => {
    try {
        await connection;
        console.log(`Server is running on port ${PORT}`);
    } catch (error) {
        console.error(error);
    }
})
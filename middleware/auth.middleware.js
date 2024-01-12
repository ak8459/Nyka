const jwt = require('jsonwebtoken')
require('dotenv').config()

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];


        if (token) {
            let user = jwt.verify(token, process.env.JWT_SECRET_KEY);
          
            req.body.userId = user.user._id
            req.user = user.user;
            req.token = token;

            next();

        } else {
            return res.status(401).send({ error: "Please login first" })
        }

    } catch (error) {
        console.log(error);
        res.status(400).send({ "error": error })
    }
}

module.exports = { auth }
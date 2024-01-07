const userModel = require('../model/user.model')
const jwt = require('jsonwebtoken')
const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        // console.log(token);
        if (token) {
            let user = jwt.verify(token, 'marvel');
            // const User = await userModel.findOne({ email: user.email, 'tokens.token': token });
            const User = await userModel.findOne({ email: user.email, });

            req.body.userId = user.userId
            req.user = User;
            req.token = token;

            next();

        } else {
            return res.status(401).send({ error: "Please login first" })
        }



        // Attach the user and token to the request for further use
        // req.user = user;
        // req.token = token;

        // Continue with the route handler


    } catch (error) {

        res.status(400).send({ "error": error })
    }
}

module.exports = { auth }
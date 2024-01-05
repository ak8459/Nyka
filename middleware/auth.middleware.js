const UserModel = require('../model/user.model')
const jwt = require('jsonwebtoken')
const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');

        // Verify the token
        const decoded = jwt.verify(token, 'user-key')
        // Use your own secret key for token verification

        // Find the user by the decoded user ID and token
        const user = await UserModel.findOne({ _id: decoded._id, 'tokens.token': token });

        // If the user is not found, throw an error
        if (!user) {
            throw new Error();
        }

        // Attach the user and token to the request for further use
        req.user = user;
        req.token = token;

        // Continue with the route handler
        next();

    } catch (error) {

        res.status(400).send({ "error": error })
    }
}

module.exports = { auth }
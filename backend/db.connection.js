
const mongoose = require('mongoose');
require('dotenv').config()
let connection = mongoose.connect('mongodb://localhost:27017/NykaDB')

module.exports = connection
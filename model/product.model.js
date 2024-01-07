const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    userId: { type: String },
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    picture: {
        type: String,
        trim: true,
    },
    description: String,
    price: Number,
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true
    },
    category: {
        type: String,
        enum: ["makeup", "skin", "haircare"],
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('product', productSchema)
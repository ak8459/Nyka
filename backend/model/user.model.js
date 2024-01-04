// import { nanoid } from 'nanoid';
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        minLength: 1,
        maxLength: 50
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        validate: {
            validator: function (value) {
                return /^\S+@\S+\.\S+$/.test(value);
            },
            message: 'Invalid email format'
        },
        required: [true, "Email required"]
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    avatar: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }


}, {
    versionKey: false
})


module.exports = mongoose.model('user', userSchema)
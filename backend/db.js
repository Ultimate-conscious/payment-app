const mongoose = require('mongoose');
const { Schema,model } = mongoose

mongoose.connect('mongodb+srv://admin:Ab9dzz11qzSP22PI@cluster0.h8ec66h.mongodb.net/paytm/users');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const User = model('User', userSchema);

module.exports = {
	User
};
import mongoose,{ Schema,model }from 'mongoose';


mongoose.connect('mongodb+srv://admin:Ab9dzz11qzSP22PI@cluster0.h8ec66h.mongodb.net/paytm')
    .then(()=>{
        console.log("DB Connected")
    })

// const userSchema = new Schema({
//     username: String,
//     password: String,
//     firstName: String,
//     lastName: String
// });
const userSchema = new Schema({
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

export const User = model('User', userSchema);

const accountSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

export const Account = model('Account',accountSchema);

// module.exports = {
// 	User,
//     Account
// };
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim:true
    },
    password: {
        type: String
    }
}, {
    timestamps: true,
})

const User = mongoose.model('User', userSchema);

module.exports = User;

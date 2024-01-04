const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
    ,
    name: {
        type: String,
        required: true
    }
}, {
    // this is for the updation keeps on updating automatically
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
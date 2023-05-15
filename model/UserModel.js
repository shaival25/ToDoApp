const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    roles: {
        type: String,
        require: true,
    },
    isActive: {
        type: Boolean,
        require: true
    }
});

module.exports = mongoose.model('User', UserSchema);
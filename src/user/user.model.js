const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    dob: {
        type: Date
    },
    address: {
        type: String
    },
    idDocument: {
        data: Buffer,
        contentType: String
    }
}, {
    collection: 'users'
})

module.exports = mongoose.model('User', userSchema)
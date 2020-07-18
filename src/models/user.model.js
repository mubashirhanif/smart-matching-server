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
    }
}, {
    collection: 'users'
})

module.exports = mongoose.model('userSchema', userSchema)
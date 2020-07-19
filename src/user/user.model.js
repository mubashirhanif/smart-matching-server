const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
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

userSchema.plugin(passportLocalMongoose)
module.exports = mongoose.model('User', userSchema)
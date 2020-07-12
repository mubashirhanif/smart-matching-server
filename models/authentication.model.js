const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let authenticationSchema = new Schema({
    name: {
        type: String,
        index: true,
        unique: true
    },
    password: {
        type: String
    },
    token: String,
    create_time: Date
}, {
    collection: 'authentications'
})

module.exports = mongoose.model('Authentication', authenticationSchema)

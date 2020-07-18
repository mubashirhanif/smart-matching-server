const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let serviceSchema = new Schema({
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

module.exports = mongoose.model('serviceSchema', serviceSchema)
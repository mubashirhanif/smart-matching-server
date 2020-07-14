const express = require('express');
const app = express();

// Express route
const userExpressRoute = express.Router();

// User schema
let UserSchema = require('../models/user.model');

// Get users
userExpressRoute.route('/').get((req, res) => {
    UserSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
// todo: the RESTful URI should refer to a resource that is a thing (noun)
//   but here is verb!
// Create user
userExpressRoute.route('/create-user').post((req, res, next) => {
    UserSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});


// Get single user
userExpressRoute.route('/get-user/:id').get((req, res) => {
    UserSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update user
userExpressRoute.route('/update-user/:id').put((req, res, next) => {
    UserSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
            console.log('User successfully updated!')
        }
    })
})

// Delete user
userExpressRoute.route('/remove-user/:id').delete((req, res, next) => {
    UserSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = userExpressRoute;

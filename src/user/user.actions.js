"use strict";

const User = require("./user.model");
const { logger } = require("../config");
const actions = {};

//GET method search users by keyword or tags.
actions.getUsers = (req, res, next) => {
    // TODO: use req.keywords, req.tags
    User.find((error, users) => {
        if (error) {
            logger.debug(`[Get Users] Failed with error: ${error.message}`);
            res.formatter.notFound(error.message)
            return next(error);
        } else {
            res.formatter.ok(users)
        }
    });
};


// Get single user
actions.getUser = (req, res, next) => {
    User.findById(req.params.id, (error, user) => {
        if (error) {
            logger.debug(`[Get User] Failed with error: ${error.message}`);
            res.formatter.notFound(error.message)
            return next(error);
        } else {
            res.formatter.ok(user)
        }
    });
};

//Update user using all the parameters
// req.param.id
actions.updateUser = (req, res, next) => {
    User.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        {
            // Returning the updated object
            new: true
        },
        (error, data) => {
            if (error) {
                logger.debug(`[Update User] Failed with error: ${error.message}`);
                res.formatter.notFound(error.message)
                return next(error);
            } else {
                res.formatter.ok(data)
            }
        }
    );
};

// Delete user
actions.deleteUser = (req, res, next) => {
    //
    User.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            logger.debug(`[Delete User] Failed with error: ${error.message}`);
            res.formatter.notFound(error.message)
            return next(error);
        } else {
            res.formatter.ok(data)
        }
    });
};

module.exports = actions;

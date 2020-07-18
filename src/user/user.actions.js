"use strict";

const User = require("./user.model");
const { logger } = require("../config");
const actions = {};

//GET method search users by keyword or tags.
actions.getUsers = (req, res, next) => {
    // TODO: use req.keywords, req.tags
    User.find((error, data) => {
        if (error) {
            logger.debug(`[Get Users] Failed with error: ${error.message}`);
            return next(error);
        } else {
            res.json(data);
        }
    });
};

//Create user using all the parameters
actions.createUser = (req, res, next) => {
    // req.body has all the parameters.
    User.create(req.body, (error, data) => {
        if (error) {
            logger.debug(`[Create User] Failed with error: ${error.message}`);
            return next(error);
        } else {
            res.json(data);
        }
    });
};

// Get single user
actions.getUser = (req, res, next) => {
    User.findById(req.params.id, (error, data) => {
        if (error) {
            logger.debug(`[Get User] Failed with error: ${error.message}`);
            return next(error);
        } else {
            res.json(data);
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
        (error, data) => {
            if (error) {
                logger.debug(`[Update User] Failed with error: ${error.message}`);
                return next(error);
            } else {
                res.json(data);
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
            return next(error);
        } else {
            res.json(data);
        }
    });
};

module.exports = actions;

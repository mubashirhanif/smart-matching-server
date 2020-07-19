"use strict";

const User = require("./user.model");
const { logger } = require("../config");
const passport = require('passport');
const emailModule = require("../config/modules/nodemailer");
const actions = {};

actions.registerUser = (req, res, next) => {
    User.register(new User(req.body),
        req.body.password,
        (error, user) => {
            if (error) {
                logger.debug(`[Register User] Failed with error: ${error.message}`);
                return next(error);
            }
            passport.authenticate('local')(req, res, () => {
                res.json(req.user);
            });
        });
};

actions.login = (req, res, next) => {
    passport.authenticate('local')(req, res, () => {
        res.json(req.user);
    });
};

actions.logout = (req, res, next) => {
    if (req.session) {
        req.logout();
        req.session.destroy((error) => {
            if (error) {
                logger.debug(`[Logout User] Failed with error: ${error.message}`);
            } else {
                res.clearCookie('session-id');
                res.json({
                    message: 'You are successfully logged out!'
                });
            }
        });
    } else {
        logger.debug(`[Logout User] Failed with error: session not found`);
        next(err);
    }
};

module.exports = actions;
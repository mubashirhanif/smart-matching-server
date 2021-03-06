"use strict";

const User = require("./user.model");
const { logger } = require("../config");
const passport = require("passport");
const emailModule = require("../config/modules/nodemailer");
const actions = {};

actions.registerUser = (req, res, next) => {
  User.register(new User(req.body), req.body.password, (error, user) => {
    if (error) {
      logger.debug(`[Register User] Failed with error: ${error.message}`);
      res.formatter.badRequest(error.message);
    }
    passport.authenticate("local")(req, res, () => {
      emailModule.sendEmail(
        user.email,
        "Thank you for registering with Smart Matching"
      );
      res.formatter.ok(user);
    });
  });
};

actions.login = (req, res, next) => {
  passport.authenticate("local")(req, res, () => {
    res.formatter.ok(req.user);
  });
};

actions.logout = (req, res, next) => {
  if (req.session) {
    req.logout();
    req.session.destroy((error) => {
      if (error) {
        logger.debug(`[Logout User] Failed with error: ${error.message}`);
      } else {
        res.clearCookie("session-id");

        res.formatter.ok({
          message: "You are successfully logged out!",
        });
      }
    });
  } else {
    logger.debug(`[Logout User] Failed with error: session not found`);
    res.formatter.forbidden("Session not found");
  }
};

actions.verifyLoggedInStatus = (req, res, next) => {
  logger.debug("[Verify Logged In Status] verifying logged in status...");
  if (req.isAuthenticated()) {
    res.formatter.ok(req.user);
  } else {
    res.formatter.unauthorized("User is not logged in");
  }
};

module.exports = actions;

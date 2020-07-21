'use strict'

const { logger } = require("../src/config");

const protect = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next()
    }
    logger.debug(`Not authorized request!`);
    res.formatter.unauthorized('User is not logged in')
}

module.exports = protect
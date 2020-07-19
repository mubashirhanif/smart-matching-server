"use strict";

const Tag = require("./tag.model");
const { logger } = require("../config");
const actions = {};

//GET method search tags by keyword or tags.
actions.getTags = (req, res, next) => {
    // TODO: use req.keywords, req.tags
    Tag.find((error, data) => {
        if (error) {
            logger.debug(`[Search Tag] Failed with error: ${error.message}`);
            res.formatter.notFound(error.message)
            return next(error);
        } else {
            res.formatter.ok(data)
        }
    });
};

// Get single tag
actions.getTag = (req, res, next) => {
    Tag.findById(req.params.id, (error, data) => {
        if (error) {
            logger.debug(`[Get Tag] Failed with error: ${error.message}`);
            res.formatter.notFound(error.message)
            return next(error);
        } else {
            res.formatter.ok(data)
        }
    });
};

//Create tag using all the parameters
actions.createTag = (req, res, next) => {
    // req.body has all the parameters.
    Tag.create(req.body, (error, data) => {
        if (error) {
            logger.debug(`[Create Tag] Failed with error: ${error.message}`);
            res.formatter.notFound(error.message)
            return next(error);
        } else {
            res.formatter.ok(data)
        }
    });
};

//Update tag using all the parameters
// req.param.id
actions.updateTag = (req, res, next) => {
    Tag.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        {
            new: true,
        },
        (error, data) => {
            if (error) {
                logger.debug(`[Update Tag] Failed with error: ${error.message}`);
                res.formatter.notFound(error.message)
                return next(error);
            } else {
                res.formatter.ok(data)
            }
        }
    );
};

// Delete tag
actions.deleteTag = (req, res, next) => {
    //
    Tag.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            logger.debug(`[Delete Tag] Failed with error: ${error.message}`);
            res.formatter.notFound(error.message)
            return next(error);
        } else {
            res.formatter.ok(data)
        }
    });
};

module.exports = actions;

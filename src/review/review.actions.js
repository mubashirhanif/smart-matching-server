"use strict";

const Review = require("./review.model");
const { logger } = require("../config");
const actions = {};

//GET method search reviews by keyword or tags.
actions.getReviews = (req, res, next) => {
    // TODO: use req.keywords, req.tags
    Review.find((error, data) => {
        if (error) {
            logger.debug(`[Search Review] Failed with error: ${error.message}`);
            return next(error);
        } else {
            res.json(data);
        }
    });
};

// Get single review
actions.getReview = (req, res, next) => {
    Review.findById(req.params.id, (error, data) => {
        if (error) {
            logger.debug(`[Get Review] Failed with error: ${error.message}`);
            return next(error);
        } else {
            res.json(data);
        }
    });
};

//Create review using all the parameters
actions.createReview = (req, res, next) => {
    // req.body has all the parameters.
    Review.create(req.body, (error, data) => {
        if (error) {
            logger.debug(`[Create Review] Failed with error: ${error.message}`);
            return next(error);
        } else {
            res.json(data);
        }
    });
};

//Update review using all the parameters
// req.param.id
actions.updateReview = (req, res, next) => {
    Review.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        {
            new: true
        },
        (error, data) => {
            if (error) {
                logger.debug(`[Update Review] Failed with error: ${error.message}`);
                return next(error);
            } else {
                res.json(data);
            }
        }
    );
};

// Delete review
actions.deleteReview = (req, res, next) => {
    //
    Review.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            logger.debug(`[Delete Review] Failed with error: ${error.message}`);
            return next(error);
        } else {
            res.json(data);
        }
    });
};

module.exports = actions;

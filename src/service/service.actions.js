"use strict";

const Service = require("./service.model");
const Tag = require("../tag/tag.model");
const { logger } = require("../config");
const actions = {};

//GET method search services by keyword or tags.
actions.getServices = (req, res, next) => {
    // TODO: use req.keywords, req.tags
    Service.find((error, data) => {
        if (error) {
            logger.debug(`[Search Service] Failed with error: ${error.message}`);
            res.formatter.notFound(error.message)
            return next(error);
        } else {
            res.formatter.ok(data)
        }
    });
};

// Get single service
actions.getService = (req, res, next) => {
    Service.findById(req.params.id, (error, data) => {
        if (error) {
            logger.debug(`[Get Service] Failed with error: ${error.message}`);
            res.formatter.notFound(error.message)
            return next(error);
        } else {
            res.formatter.ok(data)
        }
    });
};

//Create service using all the parameters
actions.createService = async (req, res, next) => {
    const tags = req.body.tags;
    let tagsIds = [];

    for (const tagName in tags) {
        let _tag = await Tag.findOneAndUpdate({
            name: tagName.toLowerCase()
        }, {
            name: tagName.toLowerCase()
        }, {
            upsert: true,
            new: true,
            setDefaultsOnInsert: true
        });
        tagsIds.push(_tag._id);
    }
    req.body.tags = tagsIds;

    Service.create(req.body, (error, data) => {
        if (error) {
            res.formatter.notFound(error.message)
            return next(error);
        } else {
            res.formatter.ok(data)
        }
    });
};

//Update service using all the parameters
// req.param.id
actions.updateService = (req, res, next) => {
    Service.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        {
            new: true
        },
        (error, data) => {
            if (error) {
                logger.debug(`[Update Service] Failed with error: ${error.message}`);
                res.formatter.notFound(error.message)
                return next(error);
            } else {
                res.formatter.ok(data)
            }
        }
    );
};

// Delete service
actions.deleteService = (req, res, next) => {
    //
    Service.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            logger.debug(`[Delete Service] Failed with error: ${error.message}`);
            res.formatter.notFound(error.message)
            return next(error);
        } else {
            res.formatter.ok(data)
        }
    });
};

module.exports = actions;

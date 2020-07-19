"use strict";

const Service = require("./service.model");
const { logger } = require("../config");
const actions = {};

//GET method search services by keyword or tags.
actions.searchServices = (req, res, next) => {
  // TODO: use req.keywords, req.tags
  Service.find((error, data) => {
    if (error) {
      logger.debug(`[Search Service] Failed with error: ${error.message}`);
      return next(error);
    } else {
      res.json(data);
    }
  });
};

//Create service using all the parameters
actions.createService = (req, res, next) => {
  // req.body has all the parameters.
  Service.create(req.body, (error, data) => {
    if (error) {
      logger.debug(`[Create Service] Failed with error: ${error.message}`);
      return next(error);
    } else {
      res.json(data);
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
        return next(error);
      } else {
        res.json(data);
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
      return next(error);
    } else {
      res.json(data);
    }
  });
};

module.exports = actions;

"use strict";

const serviceModel = require("./service.model");

const actions = {};

//GET method search services by keyword or tags.
actions.searchServices = (req, res, next) => {
  // req.keywords, req.tags
};

//Create service using all the parameters
actions.createService = (req, res, next) => {
  //
};

//Update service using all the parameters
actions.updateService = (req, res, next) => {
  //
};

// Delete service
actions.deleteService = (req, res, next) => {
  //
};

module.exports = actions;

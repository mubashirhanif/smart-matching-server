"use strict";

const userRoutes = require("./user.route");
const serviceRoutes = require("./service.route");
const tagRoutes = require("./tag.route");

/**
 * Initializing routes
 */
const init = (app) => {
  // add routes
  app.use("/api/user", userRoutes);
  app.use("/api/service", serviceRoutes);
  app.use("/api/tag", tagRoutes);
};

module.exports = {
  init,
};

"use strict";

const userRoutes = require("./user.route");
const serviceRoutes = require("./service.route");

/**
 * Initializing routes
 */
const init = (app) => {
  // add routes
  app.use("/api/user", userRoutes);
  app.use("/api/service", serviceRoutes);
};

module.exports = {
  init,
};

"use strict";

const userRoutes = require("./user.route");
const serviceRoutes = require("./service.route");
const bookingRoutes = require("./booking.route");

/**
 * Initializing routes
 */
const init = (app) => {
  // add routes
  app.use("/api/user", userRoutes);
  app.use("/api/service", serviceRoutes);
  app.use("/api/booking", bookingRoutes);
};

module.exports = {
  init,
};

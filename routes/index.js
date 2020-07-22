"use strict";

const viewRoutes = require("./view.route");
const bookingRoutes = require("./booking.route");
const reviewRoutes = require("./review.route");
const serviceRoutes = require("./service.route");
const tagRoutes = require("./tag.route");
const transactionRoutes = require("./transaction.route");
const userRoutes = require("./user.route");

/**
 * Initializing routes
 */
const init = (app) => {
  // add routes
  app.use("/api/user", userRoutes);
  app.use("/api/service", serviceRoutes);
  app.use("/api/booking", bookingRoutes);
  app.use("/api/transaction", transactionRoutes);
  app.use("/api/tag", tagRoutes);
  app.use("/api/review", reviewRoutes);
  app.use("*", viewRoutes);
};

module.exports = {
  init,
};

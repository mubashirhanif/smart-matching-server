"use strict";

const userRoutes = require("./user.route");
const serviceRoutes = require("./service.route");
const transactionRoutes = require("./transaction.route");
const tagRoutes = require("./tag.route");
const reviewRoutes = require("./review.route");

/**
 * Initializing routes
 */
const init = (app) => {
  // add routes
  app.use("/api/user", userRoutes);
  app.use("/api/service", serviceRoutes);
  app.use("/api/transaction", transactionRoutes);
  app.use("/api/tag", tagRoutes);
  app.use("/api/review", reviewRoutes);
};

module.exports = {
  init,
};

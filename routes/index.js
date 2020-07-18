"use strict";

const userRoutes = require("./user.route");
const serviceRoutes = require("./service.route");
const transactionRoutes = require("./transaction.route");

/**
 * Initializing routes
 */
const init = (app) => {
  // add routes
  app.use("/api/user", userRoutes);
  app.use("/api/service", serviceRoutes);
  app.use("/api/transaction", transactionRoutes);
};

module.exports = {
  init,
};

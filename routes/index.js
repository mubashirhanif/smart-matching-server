"use strict";

const userRoute = require("./user.route");

/**
 * Initializing routes
 */
const init = (app) => {
  // add routes
  app.use("/api/user", userRoute);
};

module.exports = {
  init,
};

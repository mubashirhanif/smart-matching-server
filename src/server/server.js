"use strict";

const {
  config,
  express,
  db,
  logger,
} = require("../config");
const routes = require("../../routes");
const mongoose = require("mongoose");

let server = null;
/**
 * Start server, database
 * Load routes, services
 * @function
 */
const listen = () => {
  const app = express.init();
  db.init();
  routes.init(app);
  server = app.listen(config.port, () => {
    logger.debug(`Port connected to: ${config.port}`)
  });
  logger.debug(`Listening at https://${config.host}:${config.port}`);
};

/**
 * Close server, database connection
 * @function
 */
const close = () => {
  server.close();
  mongoose.disconnect();
  logger.debug("Server down");
};

module.exports = {
  listen,
  close,
};

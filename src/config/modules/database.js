"use strict";

const config = require("./config");
const logger = require("./logger").logger;
const mongoose = require("mongoose");

/**
 * Connecting to database
 */
const init = () => {
  mongoose.connect(config.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
  const db = mongoose.connection;
  error(db);
  open(db);
};

/**
 * Database error
 * @callback
 * @param {object} error
 */
const error = (db) => {
  db.on("error", (error) => {
    logger.debug("Database connection error", error);
  });
};

/**
 * Database connected
 * @callback
 */
const open = (db) => {
  db.once("open", () => {
    logger.debug("Database connected");
  });
};

module.exports = {
  init,
};

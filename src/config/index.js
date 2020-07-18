"use strict";

const config = require("./modules/config");
const express = require("./modules/express");
const db = require("./modules/database");
const smtpTransport = require("./modules/nodemailer");
const logger = require("./modules/logger").logger;

module.exports = {
  config,
  express,
  db,
  logger,
  smtpTransport,
};

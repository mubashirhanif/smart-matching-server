"use strict";

const path = require("path");
let basePath = path.join(__dirname, "../../../");
const env = process.env.NODE_ENV;
if (env === "production") {
  basePath = "./";
}
const envPath = path.join(basePath, `.env/${env}.config.env`);
const envConfig = require("dotenv").config({
  path: envPath,
});
if (envConfig.error) {
  throw envConfig.error;
}

/**
 * Development config
 */
const development = {
  env,
  ip: process.env.IP,
  host: process.env.HOST,
  port: process.env.PORT,
  url: `http://${process.env.CLIENT_HOST}:${process.env.CLIENT_PORT}`,
  emailAddress: process.env.EMAIL_ADDRESS,
  emailPassword: process.env.EMAIL_PASS,
  mongoUrl: process.env.MONGO_LINK,
  clientStaticFolder: path.join(basePath, "client/static"),
  clientBuildFolder: path.join(basePath, "client/"),
  serverUploadsFolder: path.join(basePath, "pubic/"),
};

/**
 * Production config
 */
const production = {
  env,
  ip: process.env.IP,
  host: process.env.HOST,
  port: process.env.PORT,
  url: `https://${process.env.HOST}:${process.env.PORT}`,
  emailAddress: process.env.EMAIL_ADDRESS,
  emailPassword: process.env.EMAIL_PASS,
  mongoUrl: process.env.MONGO_LINK,
  clientStaticFolder: path.join(basePath, "client/static"),
  clientBuildFolder: path.join(basePath, "client/"),
  serverUploadsFolder: path.join(basePath, "public/"),
};



/**
 * test config
 */
const test = {
  env,
  ip: process.env.IP,
  host: process.env.HOST,
  port: process.env.PORT,
  url: `https://${process.env.HOST}:${process.env.PORT}`,
  emailAddress: process.env.EMAIL_ADDRESS,
  emailPassword: process.env.EMAIL_PASS,
  mongoUrl: process.env.MONGO_LINK,
  clientStaticFolder: path.join(basePath, "client/static"),
  clientBuildFolder: path.join(basePath, "client/"),
  serverUploadsFolder: path.join(basePath, "pubic/"),
};

const config = {
  development,
  production,
  test,
};

module.exports = config[env];

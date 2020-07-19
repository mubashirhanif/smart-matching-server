"use strict";

const config = require("./config");
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const User = require("../../user/user.model");

/**
 * Express configuration
 * @function
 */
const init = () => {
  const app = express();
  const corsOptions = {
    origin: true,
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": true,
    "Access-Control-Allow-Headers": true,
    "Access-Control-Expose-Headers": true,
    credentials: true,
  };
  app.use("/build/static", express.static(config.clientStaticFolder));
  app.use("/build", express.static(config.clientBuildFolder));
  app.set("views", config.clientBuildFolder);
  app.engine("html", require("ejs").renderFile); // need ejs to render html files in production
  app.set("view engine", "html");
  app.use(cookieParser(config.redisSecret));
  app.use(bodyParser.json());
  app.use(cors(corsOptions));

  passport.use(new LocalStrategy(User.authenticate()));
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());

  app.use(session({
    name: 'session-id',
    secret: '123-456-789',
    saveUninitialized: false,
    resave: false
  }));

  app.use(passport.initialize());
  app.use(passport.session());
  return app;
};

module.exports = {
  init,
};

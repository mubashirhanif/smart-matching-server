const express = require("express");
const views = require("../src/view");

// Express route
const viewRouter = express.Router();

viewRouter.get("*", views.index);

module.exports = viewRouter;

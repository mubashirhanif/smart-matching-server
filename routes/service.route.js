const express = require("express");
const serviceActions = require("../src/service");

// Express route
const serviceRouter = express.Router();

serviceRouter.get("/", serviceActions.searchServices);
serviceRouter.post("/", serviceActions.createService);
serviceRouter.put("/:id", serviceActions.updateService);
serviceRouter.delete("/:id", serviceActions.deleteService);

module.exports = serviceRouter;

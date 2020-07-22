const express = require("express");
const serviceActions = require("../src/service");
const protect = require("./middlewares/protect");

// Express route
const serviceRouter = express.Router();

serviceRouter.get("/", serviceActions.getServices);
serviceRouter.get("/:id", protect, serviceActions.getService);
serviceRouter.post("/", protect, serviceActions.createService);
serviceRouter.put("/:id", protect, serviceActions.updateService);
serviceRouter.delete("/:id", protect, serviceActions.deleteService);

module.exports = serviceRouter;

const express = require("express");
const tagActions = require("../src/tag");
const protect = require('./protect')

// Express route
const tagRouter = express.Router();

tagRouter.get("/", tagActions.getTags);
tagRouter.get("/:id", protect, tagActions.getTag);
tagRouter.post("/", protect, tagActions.createTag);
tagRouter.put("/:id", protect, tagActions.updateTag);
tagRouter.delete("/:id", protect, tagActions.deleteTag);

module.exports = tagRouter;

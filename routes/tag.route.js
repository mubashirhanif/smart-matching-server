const express = require("express");
const tagActions = require("../src/tag");

// Express route
const tagRouter = express.Router();

tagRouter.get("/", tagActions.getTags);
tagRouter.get("/:id", tagActions.getTag);
tagRouter.post("/", tagActions.createTag);
tagRouter.put("/:id", tagActions.updateTag);
tagRouter.delete("/:id", tagActions.deleteTag);

module.exports = tagRouter;

const express = require("express");
const tagActions = require("../src/tag");

// Express route
const tagRouter = express.Router();

tagRouter.get("/", tagActions.searchTags);
tagRouter.post("/", tagActions.createTag);
tagRouter.put("/:id", tagActions.updateTag);
tagRouter.delete("/:id", tagActions.deleteTag);

module.exports = tagRouter;

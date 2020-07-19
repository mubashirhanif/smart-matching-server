const express = require("express");
const reviewActions = require("../src/review");

// Express route
const reviewRouter = express.Router();

reviewRouter.get("/", reviewActions.getReviews);
reviewRouter.get("/:id", reviewActions.getReview);
reviewRouter.post("/", reviewActions.createReview);
reviewRouter.put("/:id", reviewActions.updateReview);
reviewRouter.delete("/:id", reviewActions.deleteReview);

module.exports = reviewRouter;

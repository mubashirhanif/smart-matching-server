const express = require("express");
const reviewActions = require("../src/review");

// Express route
const reviewRouter = express.Router();

reviewRouter.get("/", reviewActions.searchReviews);
reviewRouter.post("/", reviewActions.createReview);
reviewRouter.put("/:id", reviewActions.updateReview);
reviewRouter.delete("/:id", reviewActions.deleteReview);

module.exports = reviewRouter;

const express = require("express");
const reviewActions = require("../src/review");
const protect = require('./protect')

// Express route
const reviewRouter = express.Router();

reviewRouter.get("/", reviewActions.getReviews);
reviewRouter.get("/:id", protect, reviewActions.getReview);
reviewRouter.post("/", protect, reviewActions.createReview);
reviewRouter.put("/:id", protect, reviewActions.updateReview);
reviewRouter.delete("/:id", protect, reviewActions.deleteReview);

module.exports = reviewRouter;

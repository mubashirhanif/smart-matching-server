const express = require("express");
const bookingActions = require("../src/booking");
const protect = require('./protect')

// Express route
const bookingRouter = express.Router();

bookingRouter.get("/", bookingActions.getBookings);
bookingRouter.get("/:id", protect, bookingActions.getBooking);
bookingRouter.post("/", protect, bookingActions.createBooking);
bookingRouter.put("/:id", protect, bookingActions.updateBooking);
bookingRouter.delete("/:id", protect, bookingActions.deleteBooking);

module.exports = bookingRouter;

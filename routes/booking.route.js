const express = require("express");
const bookingActions = require("../src/booking");

// Express route
const bookingRouter = express.Router();

bookingRouter.get("/", bookingActions.searchBookings);
bookingRouter.post("/", bookingActions.createBooking);
bookingRouter.put("/:id", bookingActions.updateBooking);
bookingRouter.delete("/:id", bookingActions.deleteBooking);

module.exports = bookingRouter;

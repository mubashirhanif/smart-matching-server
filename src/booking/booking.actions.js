"use strict";

const Booking = require("./booking.model");
const { logger } = require("../config");
const actions = {};

//GET method search bookings by keyword or tags.
actions.searchBookings = (req, res, next) => {
  // TODO: use req.keywords, req.tags
  Booking.find((error, data) => {
    if (error) {
      logger.debug(`[Search Booking] Failed with error: ${error.message}`);
      return next(error);
    } else {
      res.json(data);
    }
  });
};

//Create booking using all the parameters
actions.createBooking = (req, res, next) => {
  // req.body has all the parameters.
  Booking.create(req.body, (error, data) => {
    if (error) {
      logger.debug(`[Create Booking] Failed with error: ${error.message}`);
      return next(error);
    } else {
      res.json(data);
    }
  });
};

//Update booking using all the parameters
// req.param.id
actions.updateBooking = (req, res, next) => {
  Booking.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        logger.debug(`[Update Booking] Failed with error: ${error.message}`);
        return next(error);
      } else {
        res.json(data);
      }
    }
  );
};

// Delete booking
actions.deleteBooking = (req, res, next) => {
  //
  Booking.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      logger.debug(`[Delete Booking] Failed with error: ${error.message}`);
      return next(error);
    } else {
      res.json(data);
    }
  });
};

module.exports = actions;

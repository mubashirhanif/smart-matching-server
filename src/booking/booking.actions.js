"use strict";

const Booking = require("./booking.model");
const { logger } = require("../config");
const actions = {};

//GET method search bookings by keyword or tags.
actions.getBookings = (req, res, next) => {
  // TODO: use req.keywords, req.tags
  Booking.find((error, data) => {
    if (error) {
      logger.debug(`[Search Booking] Failed with error: ${error.message}`);
      res.formatter.notFound(error.message)
      return next(error);
    } else {
      res.formatter.ok(data)
    }
  });
};

// Get single booking
actions.getBooking = (req, res, next) => {
  Booking.findById(req.params.id, (error, data) => {
    if (error) {
      logger.debug(`[Get Booking] Failed with error: ${error.message}`);
      res.formatter.notFound(error.message)
      return next(error);
    } else {
      res.formatter.ok(data)
    }
  });
};

//Create booking using all the parameters
actions.createBooking = (req, res, next) => {
  // req.body has all the parameters.
  Booking.create(req.body, (error, data) => {
    if (error) {
      logger.debug(`[Create Booking] Failed with error: ${error.message}`);
      res.formatter.notFound(error.message)
      return next(error);
    } else {
      res.formatter.ok(data)
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
    {
      new: true
    },
    (error, data) => {
      if (error) {
        logger.debug(`[Update Booking] Failed with error: ${error.message}`);
        res.formatter.notFound(error.message)
        return next(error);
      } else {
        res.formatter.ok(data)
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
      res.formatter.notFound(error.message)
      return next(error);
    } else {
      res.formatter.ok(data)
    }
  });
};

module.exports = actions;

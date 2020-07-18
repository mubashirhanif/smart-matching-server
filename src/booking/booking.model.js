"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let bookingSchema = new Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    payment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Transaction",
    },
  },
  {
    collection: "bookings",
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);

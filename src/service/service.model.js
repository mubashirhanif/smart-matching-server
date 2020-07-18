"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let serviceSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    location: {
      type: String,
      minlength: 3,
      maxlength: 100,
    },
    provider: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    collection: "services",
    timestamps: true,
  }
);

module.exports = mongoose.model("Service", serviceSchema);

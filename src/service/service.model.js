"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let serviceSchema = new Schema(
  {
    title: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: true
    },
    price: {
      type: Number,
      require: true
    },
    location: {
      type: String,
      minlength: 3,
      maxlength: 100,
      require: true
    },
    provider: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true
    },
    image: {
      data: Buffer,
      contentType: String
    },
    tags: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Tag'
    }
  },
  {
    collection: "services",
    timestamps: true,
  }
);

module.exports = mongoose.model("Service", serviceSchema);

"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let reviewSchema = new Schema(
    {
        rating: {
            type: Number,
            min: 1,
            max: 5
        },
        detail: {
            type: String,
        },

        provider: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        collection: "reviews",
        timestamps: true,
    }
);

module.exports = mongoose.model("Review", reviewSchema);

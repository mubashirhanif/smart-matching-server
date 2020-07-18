"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let tagSchema = new Schema(
    {
        name: {
            type: String,
        },
        creator: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        collection: "tags",
        timestamps: true,
    }
);

module.exports = mongoose.model("Tag", tagSchema);

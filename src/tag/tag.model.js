"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let tagSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            require: true
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            require: true
        },
    },
    {
        collection: "tags",
        timestamps: true,
    }
);

module.exports = mongoose.model("Tag", tagSchema);

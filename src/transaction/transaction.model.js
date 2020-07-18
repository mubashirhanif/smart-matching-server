"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let transactionSchema = new Schema(
    {
        amount: {
            type: Number,
        },
        paidBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        collection: "transactions",
        timestamps: true,
    }
);

module.exports = mongoose.model("Transaction", transactionSchema);

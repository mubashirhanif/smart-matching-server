const express = require("express");
const transactionActions = require("../src/transaction");
const protect = require('./protect')

// Express route
const transactionRouter = express.Router();

transactionRouter.get("/", transactionActions.getTransactions);
transactionRouter.get("/:id", protect, transactionActions.getTransaction);
transactionRouter.post("/", protect, transactionActions.createTransaction);
transactionRouter.put("/:id", protect, transactionActions.updateTransaction);
transactionRouter.delete("/:id", protect, transactionActions.deleteTransaction);

module.exports = transactionRouter;

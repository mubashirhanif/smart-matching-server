const express = require("express");
const transactionActions = require("../src/transaction");

// Express route
const transactionRouter = express.Router();

transactionRouter.get("/", transactionActions.getTransactions);
transactionRouter.get("/:id", transactionActions.getTransaction);
transactionRouter.post("/", transactionActions.createTransaction);
transactionRouter.put("/:id", transactionActions.updateTransaction);
transactionRouter.delete("/:id", transactionActions.deleteTransaction);

module.exports = transactionRouter;

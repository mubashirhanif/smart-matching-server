"use strict";

const Transaction = require("./transaction.model");
const { logger } = require("../config");
const actions = {};

//GET method search transactions by keyword or tags.
actions.getTransactions = (req, res, next) => {
  // TODO: use req.keywords, req.tags
  Transaction.find((error, data) => {
    if (error) {
      logger.debug(`[Search Transaction] Failed with error: ${error.message}`);
      res.formatter.notFound(error.message);
      return next(error);
    } else {
      res.formatter.ok(data);
    }
  });
};

// Get single transaction
actions.getTransaction = (req, res, next) => {
  Transaction.findById(req.params.id, (error, data) => {
    if (error) {
      logger.debug(`[Get Transaction] Failed with error: ${error.message}`);
      res.formatter.notFound(error.message);
      return next(error);
    } else {
      res.formatter.ok(data);
    }
  });
};

//Create transaction using all the parameters
actions.createTransaction = (req, res, next) => {
  // req.body has all the parameters.
  Transaction.create(req.body, (error, data) => {
    if (error) {
      logger.debug(`[Create Transaction] Failed with error: ${error.message}`);
      res.formatter.notFound(error.message);
      return next(error);
    } else {
      res.formatter.ok(data);
    }
  });
};

//Update transaction using all the parameters
// req.param.id
actions.updateTransaction = (req, res, next) => {
  Transaction.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    {
      new: true,
    },
    (error, data) => {
      if (error) {
        logger.debug(
          `[Update Transaction] Failed with error: ${error.message}`
        );
        res.formatter.notFound(error.message);
        return next(error);
      } else {
        res.formatter.ok(data);
      }
    }
  );
};

// Delete transaction
actions.deleteTransaction = (req, res, next) => {
  //
  Transaction.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      logger.debug(`[Delete Transaction] Failed with error: ${error.message}`);
      res.formatter.notFound(error.message);
      return next(error);
    } else {
      res.formatter.ok(data);
    }
  });
};

module.exports = actions;

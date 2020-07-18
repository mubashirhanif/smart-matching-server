const express = require("express");

// Express route
const userRouter = express.Router();
// userRouter.route("/", userRouter);
// User schema
let UserSchema = require("../src/models/user.model");

// Get users
userRouter.get("/", (req, res) => {
  UserSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
// todo: the RESTful URI should refer to a resource that is a thing (noun)
//   but here is verb!
// Create user
userRouter.post("/", (req, res, next) => {
  UserSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get single user
userRouter.get("/:id", (req, res) => {
  UserSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update user
userRouter.put("/:id", (req, res, next) => {
  UserSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
        console.log("User successfully updated!");
      }
    }
  );
});

// Delete user
userRouter.delete("/:id", (req, res, next) => {
  UserSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = userRouter;

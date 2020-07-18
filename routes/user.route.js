const express = require("express");
const userActions = require("../src/user");

// Express route
const userRouter = express.Router();

userRouter.get("/", userActions.getUsers);
userRouter.get("/:id", userActions.getUser);
userRouter.post("/", userActions.createUser);
userRouter.put("/:id", userActions.updateUser);
userRouter.delete("/:id", userActions.deleteUser);

module.exports = userRouter;

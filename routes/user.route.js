const express = require("express");
const userActions = require("../src/user/user.actions");
const authActions = require("../src/user/auth.actions");

console.log(authActions)
// Express route
const userRouter = express.Router();
// auth routes
userRouter.post("/", authActions.registerUser);
userRouter.post("/login", authActions.login);
userRouter.get("/logout", authActions.logout);


userRouter.get("/", userActions.getUsers);
userRouter.get("/:id", userActions.getUser);
userRouter.put("/:id", userActions.updateUser);
userRouter.delete("/:id", userActions.deleteUser);

module.exports = userRouter;

const express = require("express");
const userActions = require("../src/user/user.actions");
const authActions = require("../src/user/auth.actions");
const protect = require("./middlewares/protect");
const uploads = require("./middlewares/uploads");

// Express route
const userRouter = express.Router();
// auth routes
userRouter.post("/", uploads.single("image"), authActions.registerUser);
userRouter.post("/login", authActions.login);
userRouter.get("/logout", authActions.logout);
userRouter.post("/verifylogin", authActions.verifyLoggedInStatus);

userRouter.get("/", protect, userActions.getUsers);
userRouter.get("/:id", protect, userActions.getUser);
userRouter.put("/:id", protect, userActions.updateUser);
userRouter.delete("/:id", protect, userActions.deleteUser);

module.exports = userRouter;

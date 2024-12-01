const express = require("express");

const { loginHandler, signupHandler, forgetPasswordHandler, resetPasswordHandler } = require("../controllers/AuthController");
const AuthRouter = express.Router();

AuthRouter.post("/login", loginHandler);
AuthRouter.post("/signup", signupHandler);
AuthRouter.patch("/forgetPassword", forgetPasswordHandler);
AuthRouter.patch("/resetPassword/:userId", resetPasswordHandler);

module.exports = AuthRouter;

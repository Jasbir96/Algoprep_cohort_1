const express = require("express");

const { loginHandler, signupHandler, forgetPasswordHandler, resetPasswordHandler, logoutController } = require("../controllers/AuthController");
const AuthRouter = express.Router();

AuthRouter.post("/login", loginHandler);
AuthRouter.post("/signup", signupHandler);
AuthRouter.patch("/forgetPassword", forgetPasswordHandler);
AuthRouter.patch("/resetPassword", resetPasswordHandler);
AuthRouter.get("/logout", logoutController);

module.exports = AuthRouter;

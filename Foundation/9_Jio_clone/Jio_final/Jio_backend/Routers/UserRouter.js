const express = require("express");
const UserRouter = express.Router();
const { protectRouteMiddleWare } = require("../controllers/AuthController");
const { addToWishlist, getUserWishlist, getCurrentUser } = require("../controllers/UserController");

UserRouter.use(protectRouteMiddleWare);
UserRouter.get("/wishlist", getUserWishlist);
UserRouter.get("/",getCurrentUser);
UserRouter.post("/wishlist", addToWishlist);


module.exports= UserRouter;





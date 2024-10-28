const express = require('express');
const movieRouter = express.Router();
const { createMovie, deleteMovie, getAllMovie, getMovie } = require("../controller/movieController.js");
const { protectRouteMiddleware, isAdminMiddleWare } = require('../controller/authController.js');

movieRouter
    .post("/", createMovie).
    get("/api/movie", protectRouteMiddleware, isAdminMiddleWare, getAllMovie)
    .get("/api/movie/:id", getMovie).
    delete("/api/movie/:id", protectRouteMiddleware, deleteMovie);

module.exports = movieRouter;
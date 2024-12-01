const express = require("express");
const { getCurrentMovies, getTopRatedMovies } = require("../controllers/MovieController");
const MovieRouter = express.Router();

MovieRouter.get("/currentPlaying", getCurrentMovies);
MovieRouter.get("/topRated", getTopRatedMovies);

module.exports = MovieRouter;


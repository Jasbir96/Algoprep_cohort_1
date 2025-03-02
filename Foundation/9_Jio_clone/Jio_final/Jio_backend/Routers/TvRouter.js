const express = require("express");
const {
    getActionTvShows,
    getComedyTvShows,
    getCrimeTvShows,
    getDramaTvShows,
    getMysteryTvShows,
    getTvShowDetails,
} = require("../controllers/TvController");

const TvShowsRouter = express.Router();
TvShowsRouter.get("/action", getActionTvShows);
TvShowsRouter.get("/comedy", getComedyTvShows);
TvShowsRouter.get("/crime", getCrimeTvShows);
TvShowsRouter.get("/drama", getDramaTvShows);
TvShowsRouter.get("/mystery", getMysteryTvShows);
TvShowsRouter.get("/details", getTvShowDetails);

module.exports = TvShowsRouter;


// 

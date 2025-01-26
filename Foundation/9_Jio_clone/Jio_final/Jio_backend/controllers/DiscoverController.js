const { tmdbApi, TMDB_ENDPOINT } = require("../services/tmdb.services.js");

const getNowPlaying = async (req, res) => {
    try {
        const data = await tmdbApi.get(TMDB_ENDPOINT.fetchNowPlaying);

        res.status(200).json({
            status: "success",
            response: data
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
            status: "failure",
        });
    }
};

const getTrending = async (req, res) => {
    try {
        const data = await tmdbApi.get(TMDB_ENDPOINT.fetchTrending);

        res.status(200).json({
            status: "success",
            response: data
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
            status: "failure",
        });
    }
};

const getTopRated = async (req, res) => {
    try {
        const data = await tmdbApi.get(TMDB_ENDPOINT.fetchTopRated);

        res.status(200).json({
            status: "success",
            response: data
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
            status: "failure",
        });
    }
};

const getUpcoming = async (req, res) => {
    try {
        const data = await tmdbApi.get(TMDB_ENDPOINT.fetchUpcoming);

        res.status(200).json({
            status: "success",
            response: data
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
            status: "failure",
        });
    }
};

module.exports = {
    getNowPlaying,
    getTrending,
    getTopRated,
    getUpcoming,
};

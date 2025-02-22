const { tmdbApi, TMDB_ENDPOINT } = require("../services/tmdb.services.js");

const getActionMovies = async (req, res) => {
    try {
        const data = await tmdbApi.get(TMDB_ENDPOINT.fetchActionMovies);
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

const getComedyMovies = async (req, res) => {
    try {
        const data = await tmdbApi.get(TMDB_ENDPOINT.fetchComedyMovies);

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

const getHorrorMovies = async (req, res) => {
    try {
        const data = await tmdbApi.get(TMDB_ENDPOINT.fetchHorrorMovies);

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

const getRomanceMovies = async (req, res) => {
    try {
        const data = await tmdbApi.get(TMDB_ENDPOINT.fetchRomanceMovies);

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

const getAnimeMovies = async (req, res) => {
    try {
        const data = await tmdbApi.get(TMDB_ENDPOINT.fetchAnimeMovies);

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

const getMovieDetails = async (req, res) => {
    try {
        const { id } = req.query;
        if (!id) throw new Error("Video Id is not defined.");
        const details = await tmdbApi.get(TMDB_ENDPOINT.fetchMovieVideos(id));

        res.status(200).json({
            status: "success",
            data: details,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
            status: "failure",
        });
    }
};

module.exports = {
    getActionMovies,
    getMovieDetails,
    getComedyMovies,
    getHorrorMovies,
    getRomanceMovies,
    getAnimeMovies,
};

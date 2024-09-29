const { getMediaList } = require("../utility");


async function getCurrentMovies(req, res) {
    // db wala kaaam hora hai 
    const currentMovieList = await getMediaList(TMDB_ENDPOINT.fetchcurrentMovies);

    res.status(200).json({
        status: "success",
        message: currentMovieList
    })
}
async function getTopRatedMovies(req, res) {
    const currentMovieList = await getMediaList(TMDB_ENDPOINT.fetchTopRated);
    res.status(200).json({
        status: "success",
        message: currentMovieList
    })
}

module.exports = {
    getCurrentMovies, getTopRatedMovies
}

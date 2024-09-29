
const headers = {
    accept: 'application/json',
    // api key
    Authorization: `Bearer ${process.env.TMDB_KEY} `
};
const imageBASEURL = "https://image.tmdb.org/t/p/original/";
const tmdbBASEURL = "https://api.themoviedb.org/3/"
const TMDB_ENDPOINT = {
    // Home Page
    fetchcurrentMovies: "/movie/now_playing",
    fetchTrending: `/trending/all/week`,
    fetchPopular: `/trending/all/week`,
    fetchUpcoming: `/movie/upcoming?include_video=true`,
// movies 
    fetchTopRated: `/movie/top_rated?include_video=true`,
    fetchActionMovies: `/discover/movie?language=en-US&with_genres=28`,
    fetchComedyMovies: `/discover/movie?language=en-US&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?language=en-US&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?language=en-US&with_genres=10749`,
    fetchAnimeMovies: '/discover/movie?language=en-US&with_genres=16',
// tv enpoints
    fetchActionTvShows: `/discover/tv?language=en-US&with_genres=10759`,
    fetchComedyTvShows: `/discover/tv?language=en-US&with_genres=35`,
    fetchMysteryTvShows: `/discover/tv?language=en-US&with_genres=9648`,
    fetchDramaTvShows: `/discover/tv?language=en-US&with_genres=18`,
    fetchCrimeTvShows: `/discover/tv?language=en-US&with_genres=80`,
};


async function getMediaList(endpoint) {
    const url = tmdbBASEURL + endpoint;
    const response = await fetch(url, { method: 'GET', headers: headers })
    const data = response.json()
    return data;
}
module.exports={
    getMediaList, TMDB_ENDPOINT, 
}

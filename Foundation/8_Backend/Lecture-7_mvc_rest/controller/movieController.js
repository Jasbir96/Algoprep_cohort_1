const MovieModel = require("../model/movieModel");

const createMovie = async function (req, res) {
    try {
        const movieObject = movie.body
        const movie = await MovieModel.create(movieObject);
        // send back the created movie with status 201 (created)
        res.status(201).json(movie);

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "internal server error",
            error: err,
        })
    }
}


const getAllMovie = async (req, res) => {
    try {

        const movie = await MovieModel.find();
        // if movie is present -> send the resp
        if (movie.length != 0) {
            res.status(200).json({
                message: movie
            })
            // if it's not there then send movie not found 
        } else {
            res.status(404).json({
                message: "did not get any movie"
            })
        }
    } catch (err) {
        res.status(500).json({
            status: "Internal server error",
            message: err.message
        })
    }

}
const getMovie = async (req, res) => {
    try {
        const id = req.params.id;
        const movie = await movieModel.findById(id);
        // if movie is present -> send the resp
        if (movie) {
            res.status(200).json({
                message: movie
            })
            // if it's not there then send movie not found 
        } else {
            res.status(404).json({
                message: "did not get the movie"
            })
        }
    } catch (err) {
        res.status(500).json({
            status: "Internal server error",
            message: err.message
        })
    }

}
const deleteMovie = async (req, res) => {
    try {
        let { id } = req.params;
        const movie = await movieModel.findByIdAndDelete(id);
        if (movie === null) {
            res.status(404).json({
                status: "sucess",
                message: "movie does not exist",

            })
        } else {
            res.status(200).json({
                status: "sucess",
                message: "movie is deleted",
                movie: movie
            })
        }
    } catch (err) {
        res.status(500).json({
            status: "Internal server error",
            message: err.message
        })
    }
}

module.exports = {
    createMovie, deleteMovie,getAllMovie,getMovie
}
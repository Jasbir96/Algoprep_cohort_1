import React from 'react'


async function fetchMovie(id) {
    const response = await fetch(`https://freetestapi.com/api/v1/movies/${id}`);
    const data = await response.json();
    return data;

}

async function MovieData(props) {
    const movieId = props.params.movieId;
    const movieData = await fetchMovie(movieId);

    return (
        <>
            <p>-----------------------</p>
            <h1>Movie Data Page for :  {movieId}</h1>
            <h2>Movie Name : {movieData.title}</h2>
            <p> Language Name : {movieData.language}</p>
        </>
    )
}

export default MovieData;
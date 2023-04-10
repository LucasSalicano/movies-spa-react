import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {MoviesService} from "../api/MoviesService";

export const MovieDetail = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState({});
    const fetchMovieDetail = async () => {
        const {data} = await MoviesService.getDetailByMovieId(id);
        setMovie(data[0]);
    }

    useEffect(() => {
        fetchMovieDetail();
    }, [])

    return (
        <>
            <h1>{movie.description}</h1>
            <article>MovieId: {movie.movieId}</article>
            <article>Release Date: {movie.releaseDate}</article>
        </>
    );
};

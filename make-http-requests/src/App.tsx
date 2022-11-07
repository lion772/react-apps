import React, { useState } from "react";
import "./App.css";
import MoviesList from "./components/MoviesList/MoviesList";

type MovieAPI = {
    episode_id: string;
    title: string;
    opening_crawl: string;
    release_date: string;
};

const API = "https://swapi.dev/api/films";

const App = () => {
    const [movies, setMovies] = useState([]);

    async function fetchMoviesHandler() {
        await fetch(API)
            .then((res) => res.json())
            .then(({ results }) => {
                const transformedMovies = results.map((movie: MovieAPI) => {
                    return {
                        id: movie.episode_id,
                        title: movie.title,
                        openingText: movie.opening_crawl,
                        releaseDate: movie.release_date,
                    };
                });
                console.log(transformedMovies);
                setMovies(transformedMovies);
            });
    }

    return (
        <>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch movies!</button>
            </section>
            <section>
                <MoviesList movies={movies} />
            </section>
        </>
    );
};

export default App;

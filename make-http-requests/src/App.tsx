import React, { FC, useState } from "react";
import "./App.css";
import MoviesList from "./components/MoviesList/MoviesList";

type MovieAPI = {
    episode_id: string;
    title: string;
    opening_crawl: string;
    release_date: string;
};

const API_FILMS = "https://swapi.dev/api/films";

const App: FC = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    async function fetchMoviesHandler() {
        setIsLoading(true);
        const response = await fetch(API_FILMS);
        const { results } = await response.json();
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
        setIsLoading(false);
    }

    return (
        <>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch movies!</button>
            </section>
            <section>
                {!isLoading && movies.length > 0 && (
                    <MoviesList movies={movies} />
                )}
                {!isLoading && movies.length === 0 && <p>Found no movies.</p>}
            </section>
            <section>{isLoading && <p>Loading...</p>}</section>
        </>
    );
};

export default App;

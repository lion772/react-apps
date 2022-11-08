import React, { FC, useState } from "react";
import "./App.css";
import MoviesList from "./components/MoviesList/MoviesList";

type MovieAPI = {
    episode_id: string;
    title: string;
    opening_crawl: string;
    release_date: string;
};

const API_FILMS = "https://swapi.dev/api/filmss";

const App: FC = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>();

    async function fetchMoviesHandler() {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(API_FILMS);
            if (response.status !== 200) {
                throw new Error("Something went wrong!");
            }
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
        } catch (e) {
            setError((e as Error).message);
        }

        setIsLoading(false);
    }

    let content = <p>Found no movies.</p>;

    if (movies.length > 0) content = <MoviesList movies={movies} />;

    if (error) content = <p>{error}</p>;

    if (isLoading) content = <p>Loading...</p>;

    return (
        <>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch movies!</button>
            </section>
            <section>{content}</section>
        </>
    );
};

export default App;

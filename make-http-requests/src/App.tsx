import React, { FC, useCallback, useEffect, useState } from "react";
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
    const [error, setError] = useState<string | null>();

    const fetchMoviesHandler = useCallback(async () => {
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
    }, []);

    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler]);

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


/* useCallback is mostly used when you don't want a function to get un-necessarily created each time on every render and subsequent re-renders of the component.

Remember that useCallback will always return the same instance of the function on re-renders unlike normal functions where they are recreated with each re-render of the component. The useCallback would refresh only when there is a change in dependencies.

The second argument of useCallback refers to the dependencies which would trigger a re-initialization of the function defined inside useCallback if those dependencies change. */
import React, { FC, useCallback, useEffect, useState } from "react";
import "./App.css";
import AddMovie from "./components/AddMovie/AddMovie";
import { MovieProps } from "./components/MoviesList/Movie/Movie";
import MoviesList from "./components/MoviesList/MoviesList";

type MovieAPI = {
    episode_id: string;
    title: string;
    opening_crawl: string;
    release_date: string;
};

const URL_FIREBASE =
    "https://react-http-movies-feb4c-default-rtdb.firebaseio.com";

const API_FILMS = `${URL_FIREBASE}/movies.json`;

const App: FC = () => {
    const [movies, setMovies] = useState<any>([]);
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
            const data = await response.json();

            const transformedMovies = [];
            let counter = 0;
            for (const key in data) {
                transformedMovies.push({ id: counter, ...data[key] });
                counter++;
            }

            /* const transformedMovies = data.results.map((movie: MovieAPI) => {
                console.log(movie);
                return {
                    id: movies.lenght + 1,
                    title: movie.title,
                    openingText: movie.opening_crawl,
                    releaseDate: movie.release_date,
                };
            }); */

            setMovies(transformedMovies);
        } catch (e) {
            setError((e as Error).message);
        }

        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler]);

    const addMovieHandler = async (movie: MovieProps) => {
        /*  setMovies((previousState: any) => [
            { ...movie, id: movies.length + 1 },
            ...previousState,
        ]); */

        const response = await fetch(API_FILMS, {
            method: "POST",
            body: JSON.stringify(movie),
            headers: {
                //Describe the content that will be sent.
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();
        console.log(data);

        fetchMoviesHandler();
    };

    let content = <p>Found no movies.</p>;

    if (movies.length > 0) content = <MoviesList movies={movies} />;

    if (error) content = <p>{error}</p>;

    if (isLoading) content = <p>Loading...</p>;

    return (
        <>
            <section>
                <AddMovie onAddMovie={addMovieHandler} />
            </section>

            <section>{content}</section>
        </>
    );
};

export default App;

/* useCallback is mostly used when you don't want a function to get un-necessarily created each time on every render and subsequent re-renders of the component.

Remember that useCallback will always return the same instance of the function on re-renders unlike normal functions where they are recreated with each re-render of the component. The useCallback would refresh only when there is a change in dependencies.

The second argument of useCallback refers to the dependencies which would trigger a re-initialization of the function defined inside useCallback if those dependencies change. */

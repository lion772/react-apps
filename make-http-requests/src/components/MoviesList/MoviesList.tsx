import React, { FC } from "react";
import Movie, { MovieProps } from "./Movie/Movie";
import styles from "./MoviesList.module.css";

interface MoviesListProps {
    movies: MovieProps[];
}

const MoviesList: FC<MoviesListProps> = (props) => (
    <div className={styles.MoviesList}>
        <ul className={styles["movies-list"]}>
            {props.movies.map((movie) => {
                return (
                    <Movie
                        key={movie.id}
                        title={movie.title}
                        releaseDate={movie.releaseDate}
                        openingText={movie.openingText}
                    />
                );
            })}
        </ul>
    </div>
);

export default MoviesList;

import React, { FC } from "react";
import styles from "./Movie.module.css";

export interface MovieProps {
    id?: string | undefined;
    title?: string | undefined;
    releaseDate?: string | undefined;
    openingText?: string | undefined;
}

const Movie: FC<MovieProps> = (props) => (
    <div className={styles.Movie}>
        <li className={styles.movie}>
            <h2>{props.title}</h2>
            <h3>{props.releaseDate}</h3>
            <p>{props.openingText}</p>
        </li>
    </div>
);

export default Movie;

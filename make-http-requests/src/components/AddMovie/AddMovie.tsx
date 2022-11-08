import React, { FC, useRef } from "react";
import styles from "./AddMovie.module.css";
import { MovieProps } from "../MoviesList/Movie/Movie";

interface AddMovieProps {
    onAddMovie: (movie: MovieProps) => void;
}

const AddMovie: FC<AddMovieProps> = ({ onAddMovie }) => {
    const titleRef = useRef<HTMLInputElement | null>(null);
    const openingTextRef = useRef<HTMLTextAreaElement | null>(null);
    const releaseDateRef = useRef<HTMLInputElement | null>(null);

    function submitHandler(event: { preventDefault: () => void }) {
        event.preventDefault();

        // could add validation here...

        const movie: MovieProps = {
            title: titleRef.current?.value,
            openingText: openingTextRef.current?.value,
            releaseDate: releaseDateRef.current?.value,
        };

        onAddMovie(movie);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={styles.control}>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" ref={titleRef} />
            </div>
            <div className={styles.control}>
                <label htmlFor="opening-text">Opening Text</label>
                <textarea
                    rows={5}
                    id="opening-text"
                    ref={openingTextRef}
                ></textarea>
            </div>
            <div className={styles.control}>
                <label htmlFor="date">Release Date</label>
                <input type="text" id="date" ref={releaseDateRef} />
            </div>
            <button>Add Movie</button>
        </form>
    );
};

export default AddMovie;

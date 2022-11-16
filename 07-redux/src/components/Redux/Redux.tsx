import React, { FC } from "react";
import styles from "./Redux.module.css";
import { configureStore } from "@reduxjs/toolkit";

interface ReduxProps {}

const Redux: FC<ReduxProps> = () => {
    const store = configureStore({
        reducer: {
            posts: postsReducer,
            comments: commentsReducer,
            users: usersReducer,
        },
    });
    return <div className={styles.Redux}>Redux Component</div>;
};

export default Redux;

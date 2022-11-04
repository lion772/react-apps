import React, { FC, Key } from "react";
import Card from "../Card/Card";
import styles from "./UsersItem.module.css";

interface UsersItemProps {
    key: Key | null | undefined;
    username: string;
    age: number;
}

const UsersItem: FC<UsersItemProps> = ({ username, age }) => (
    <div className={styles.UsersItem}>
        <div className={styles.UsersItem__description}>
            <h3>{username[0].toUpperCase() + username.slice(1)}</h3>
            <p>{age} years old</p>
        </div>
    </div>
);

export default UsersItem;

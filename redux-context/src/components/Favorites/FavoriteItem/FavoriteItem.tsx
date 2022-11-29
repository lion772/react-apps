import React, { FC } from "react";
import Card from "../../UI/Card/Card";
import styles from "./FavoriteItem.module.css";

interface FavoriteItemProps {
    id: string;
    title: string;
    description: string;
}

const FavoriteItem: FC<FavoriteItemProps> = (props) => {
    return (
        <Card style={{ marginBottom: "1rem" }}>
            <div className={styles["favorite-item"]}>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </Card>
    );
};

export default FavoriteItem;

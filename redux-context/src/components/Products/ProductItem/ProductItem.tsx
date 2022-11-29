import React, { FC } from "react";
import Card from "../../UI/Card/Card";
import styles from "./ProductItem.module.css";

interface ProductItemProps {
    id: string;
    isFavorite: boolean;
    description: string;
    title: string;
}

const ProductItem: FC<ProductItemProps> = (props) => {
    const toggleFavHandler = () => {};
    return (
        <Card style={{ marginBottom: "1rem" }}>
            <div className={styles["product-item"]}>
                <h2 className={props.isFavorite ? "is-fav" : ""}>
                    {props.title}
                </h2>
                <p>{props.description}</p>
                <button
                    className={!props.isFavorite ? "button-outline" : ""}
                    onClick={toggleFavHandler}
                >
                    {props.isFavorite ? "Un-Favorite" : "Favorite"}
                </button>
            </div>
        </Card>
    );
};

export default ProductItem;

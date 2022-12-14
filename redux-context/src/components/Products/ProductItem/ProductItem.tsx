import React, { FC, useContext } from "react";
import { ProductsContext } from "../../../context/products-context";
import Card from "../../UI/Card/Card";
import styles from "./ProductItem.module.css";

interface ProductItemProps {
    id: string;
    isFavorite: boolean;
    description: string;
    title: string;
}

const ProductItem: FC<ProductItemProps> = (props) => {
    const { toggleFav } = useContext(ProductsContext);

    const toggleFavHandler = () => {
        toggleFav(props.id);
    };

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

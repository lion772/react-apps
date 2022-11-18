import React, { FC } from "react";
import Card from "../../../UI/Card/Card";
import styles from "./ProductItem.module.css";

interface ProductItemProps {
    title: string;
    price: number;
    description: string;
}

const ProductItem: FC<ProductItemProps> = (props) => {
    const { title, price, description } = props;

    return (
        <li className={styles.item}>
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div className={styles.price}>${price.toFixed(2)}</div>
                </header>
                <p>{description}</p>
                <div className={styles.actions}>
                    <button>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
};

export default ProductItem;

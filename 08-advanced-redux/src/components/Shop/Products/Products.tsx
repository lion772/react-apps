import React, { FC } from "react";
import { Item } from "../../../store/cart-slice";
import ProductItem from "./ProductItem/ProductItem";
import styles from "./Products.module.css";

interface ProductsProps {}

const dummyData = {
    items: [
        {
            id: "1",
            name: "Rice",
            quantity: 1,
            price: 1.99,
            totalPrice: 1.99,
            description: "very tasty rice",
        },
        {
            id: "2",
            name: "Sushi",
            quantity: 1,
            price: 4.99,
            totalPrice: 4.99,
            description: "delicious food",
        },
    ],
    totalQuantity: 2,
};

const Products: FC<ProductsProps> = () => {
    const mapProducts = dummyData.items.map((product: Item) => (
        <ProductItem key={product.id} {...product} />
    ));
    return (
        <section className={styles.products}>
            <h2>Buy your favorite products</h2>
            <ul>{mapProducts}</ul>
        </section>
    );
};

export default Products;

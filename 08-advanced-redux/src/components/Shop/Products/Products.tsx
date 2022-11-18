import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Item, initialState } from "../../../store/cart-slice";
import ProductItem from "./ProductItem/ProductItem";
import styles from "./Products.module.css";

interface ProductsProps {}

const Products: FC<ProductsProps> = () => {
    const products = useSelector((state: any) => state.cart.items);
    console.log(products);

    const mapProducts = initialState.items.map((product: Item) => (
        <ProductItem
            key={product.id}
            title={product.name}
            price={product.price}
            description={product.description}
        />
    ));
    return (
        <section className={styles.products}>
            <h2>Buy your favorite products</h2>
            <ul>{mapProducts}</ul>
        </section>
    );
};

export default Products;

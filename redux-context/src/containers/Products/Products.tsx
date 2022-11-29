import React, { FC, useContext } from "react";
import { Product } from "../../App";
import ProductItem from "../../components/Products/ProductItem/ProductItem";
import { ProductsContext } from "../../context/products-context";
import styles from "./Products.module.css";

interface ProductsProps {}

const Products: FC<ProductsProps> = () => {
    const { products: productList } = useContext(ProductsContext);

    let content;
    if (productList.length > 0) {
        content = (
            <ul className={styles["products-list"]}>
                {productList.map((prod: Product) => (
                    <ProductItem key={prod.id} {...prod} />
                ))}
            </ul>
        );
    } else {
        content = <p>The list of products is empty :(</p>;
    }

    return <>{content}</>;
};

export default Products;

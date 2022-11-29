import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Product } from "../../App";
import ProductItem from "../../components/Products/ProductItem/ProductItem";
import styles from "./Products.module.css";

interface ProductsProps {}

const Products: FC<ProductsProps> = () => {
    const productList = useSelector((state: any) => state.shop.products);

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

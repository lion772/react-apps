import React, { FC } from "react";
import ProductItem from "../../components/Products/ProductItem/ProductItem.lazy";
import styles from "./Products.module.css";

interface ProductsProps {}

const Products: FC<ProductsProps> = () => {
    //const productList = [{id:"1", title:"some tittle", description: "some description", isFav:true}]

    return (
        <ul className={styles["products-list"]}>
            {productList.map((prod) => (
                <ProductItem
                    key={prod.id}
                    id={prod.id}
                    title={prod.title}
                    description={prod.description}
                    isFav={prod.isFavorite}
                />
            ))}
        </ul>
    );
};

export default Products;
function useSelector(arg0: (state: any) => any) {
    throw new Error("Function not implemented.");
}

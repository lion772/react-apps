import React, { useContext } from "react";
import { Product } from "../../App";
import FavoriteItem from "../../components/Favorites/FavoriteItem/FavoriteItem";
import { ProductsContext } from "../../context/products-context";

const Favorites = () => {
    const { products: productList } = useContext(ProductsContext);
    const favoriteProducts = productList.filter(
        (product: Product) => product.isFavorite
    );
    console.log(favoriteProducts);
    let content: JSX.Element = (
        <p className="placeholder">Got no favorites yet!</p>
    );
    if (favoriteProducts.length > 0) {
        content = (
            <ul className="products-list">
                {favoriteProducts.map((prod: Product) => (
                    <FavoriteItem key={prod.id} {...prod} />
                ))}
            </ul>
        );
    }
    return content;
};

export default Favorites;

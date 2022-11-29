import React from "react";
import { useSelector } from "react-redux";
import { Product } from "../../App";
import FavoriteItem from "../../components/Favorites/FavoriteItem/FavoriteItem";

const Favorites = () => {
    const favoriteProducts = useSelector((state: any) =>
        state.shop.products.filter((p: Product) => p.isFavorite)
    );
    let content = <p className="placeholder">Got no favorites yet!</p>;
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

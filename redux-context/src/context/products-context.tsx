import { createContext, FC, PropsWithChildren, useState } from "react";
import { Product } from "../App";

const defaultInitialValue: any = {
    products: [
        {
            id: "p1",
            title: "Red Scarf",
            description: "A pretty red scarf.",
            isFavorite: false,
        },
        {
            id: "p2",
            title: "Blue T-Shirt",
            description: "A pretty blue t-shirt.",
            isFavorite: false,
        },
        {
            id: "p3",
            title: "Green Trousers",
            description: "A pair of lightly green trousers.",
            isFavorite: false,
        },
        {
            id: "p4",
            title: "Orange Hat",
            description: "Street style! An orange hat.",
            isFavorite: false,
        },
    ],
    toggleFav: (id: string) => {},
};

export const ProductsContext = createContext({
    products: [],
    toggleFav: (id: string) => {},
});

const ProductsContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [productList, setProductList] = useState(
        defaultInitialValue["products"]
    );

    const toggleFav = (id: string) => {
        setProductList((currentProductList: Product[]) => {
            const prodIndex = currentProductList.findIndex((p) => p.id === id);
            const newFavStatus = !currentProductList[prodIndex].isFavorite;
            const updatedProducts = [...currentProductList];

            updatedProducts[prodIndex] = {
                ...currentProductList[prodIndex],
                isFavorite: newFavStatus,
            };
            return updatedProducts;
        });
    };

    const value = { products: productList, toggleFav };

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;

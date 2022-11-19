import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useHttp from "../../hooks/use-http/use-http";
import { Item } from "../../store/cart-slice";
import Card from "../UI/Card/Card";
import styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";

interface CartProps {}

const requestConfig = {
    url: "https://react-http-movies-feb4c-default-rtdb.firebaseio.com/products-advanced-redux.json",
};

const Cart: FC<CartProps> = () => {
    const products = useSelector((state: any) => state.cart.items);
    const [productsState, setProducts] = useState<any>([]);
    const { error, isLoading, sendRequest: fetchProducts } = useHttp();

     useEffect(() => {
        if(products){
            fetchProducts(requestConfig, retrieveDataFromBackend);
        }
    }, [fetchProducts, products]);

    function retrieveDataFromBackend(data: any) {
        //const loadedProducts = [];
        console.log(data.items)
       /*  for (const item of data) {
            loadedProducts.push(item );
        } */
        setProducts(data.items);
        //console.log(loadedProducts)
    } 

    const cardItem =
        productsState &&
        productsState.map((product: Item) => {
            return <CartItem key={product.id} {...product} />;
        });

    return (
        <Card className={styles.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>{cardItem}</ul>
        </Card>
    );
};

export default Cart;

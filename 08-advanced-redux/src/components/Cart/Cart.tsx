import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useHttp from "../../hooks/use-http/use-http";
import { fetchCartData } from "../../store/cart-actions";
import { Item } from "../../store/cart-slice";
import Card from "../UI/Card/Card";
import styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";

interface CartProps {}

const Cart: FC<CartProps> = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: any) => state.cart.items);

    useEffect(() => {
        dispatch(fetchCartData() as any);
    }, [dispatch]);

    const cardItem =
        products &&
        products.map((product: Item) => {
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

import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData } from "../../store/cart-actions";
import { Item } from "../../store/cart-slice";
import Card from "../UI/Card/Card";
import styles from "./Cart.module.css";
import CartItem from "./CartItem/CartItem";

interface CartProps {}

const Cart: FC<CartProps> = () => {
    const products = useSelector((state: any) => state.cart.items);

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

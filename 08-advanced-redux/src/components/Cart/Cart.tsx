import React, { FC } from "react";
import { useSelector } from "react-redux";
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
            return <CartItem item={{ key: product.id, ...product }} />;
        });

    return (
        <Card className={styles.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>{cardItem}</ul>
        </Card>
    );
};

export default Cart;

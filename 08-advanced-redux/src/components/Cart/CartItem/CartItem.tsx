import React, { FC, Key } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CartItem.module.css";
import { cartActions, Item } from "../../../store/cart-slice";

interface CartItemProps {
    item: {
        key?: Key | undefined | null;
        id: string;
        name: string;
        quantity: number;
        price: number;
        totalPrice: number;
        description: string;
    };
}

const CartItem: FC<CartItemProps> = (props) => {
    const { key, ...product } = props.item;
    //const products = useSelector((state: any) => state.cart.items);
    //const product = products.find((item: Item) => item.id === id);
    //console.log(product);
    const dispatch = useDispatch();

    const onClickAddHandler = () => {
        dispatch(cartActions.addItemToCart(product));
    };
    const onClickRemoveHandler = () => {
        dispatch(cartActions.removeItemFromCart(product.id));
    };
    return (
        <li className={styles.item}>
            <header>
                <h3>{product.name}</h3>
                <div className={styles.price}>
                    ${product.totalPrice.toFixed(2)}{" "}
                    <span className={styles.itemprice}>
                        (${product.price.toFixed(2)}/item)
                    </span>
                </div>
            </header>
            <div className={styles.details}>
                <div className={styles.quantity}>
                    x <span>{product.quantity}</span>
                </div>
                <div className={styles.actions}>
                    <button onClick={onClickRemoveHandler}>-</button>
                    <button onClick={onClickAddHandler}>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;

import React, { FC, Key } from "react";
import { useDispatch } from "react-redux";
import styles from "./CartItem.module.css";
import { cartActions } from "../../../store/cart-slice";

interface CartItemProps {
    key: Key;
    id: string;
    name: string;
    price: number;
    description: string;
    quantity: number;
    totalPrice: number;
}

const CartItem: FC<CartItemProps> = (props) => {
    const product = {
        id: props.id,
        name: props.name,
        price: props.price,
        description: props.description,
        quantity: props.quantity,
        totalPrice: props.totalPrice,
    };
    
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

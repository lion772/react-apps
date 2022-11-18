import React, { FC } from "react";
import { useDispatch } from "react-redux";
import styles from "./CartItem.module.css";
import { cartActions } from "../../../store/cart-slice";

interface CartItemProps {
    id: string;
    name: string;
    price: number;
    description: string;
    quantity: number;
    totalPrice: number;
}

const CartItem: FC<CartItemProps> = (props) => {
    const dispatch = useDispatch();

    const onClickAddHandler = () => {
        dispatch(cartActions.addItemToCart(props));
    };
    const onClickRemoveHandler = () => {
        dispatch(cartActions.removeItemFromCart(props.id));
    };
    return (
        <li className={styles.item}>
            <header>
                <h3>{props.name}</h3>
                <div className={styles.price}>
                    ${props.totalPrice.toFixed(2)}{" "}
                    <span className={styles.itemprice}>
                        (${props.price.toFixed(2)}/item)
                    </span>
                </div>
            </header>
            <div className={styles.details}>
                <div className={styles.quantity}>
                    x <span>{props.quantity}</span>
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

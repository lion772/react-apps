import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
import styles from "./CartButton.module.css";

interface CartButtonProps {}

const CartButton: FC<CartButtonProps> = () => {
    const numberProducts = useSelector(
        (state: any) => state.cart.totalQuantity
    );

    const dispatch = useDispatch();

    const onClickHandler = () => {
        dispatch(uiActions.toggle());
    };

    return (
        <button className={styles.button} onClick={onClickHandler}>
            <span>My Cart</span>
            <span className={styles.badge}>{numberProducts}</span>
        </button>
    );
};

export default CartButton;

/* const numberProducts = products.reduce(
        (accumulator: number, item: Item) => {
            console.log("acc: ", accumulator);
            return accumulator + item.quantity;
        },
        0
    ); */

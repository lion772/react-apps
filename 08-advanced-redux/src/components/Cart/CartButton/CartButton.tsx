import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
import styles from "./CartButton.module.css";

interface CartButtonProps {}

const CartButton: FC<CartButtonProps> = () => {
    const dispatch = useDispatch();

    const onClickHandler = () => {
        dispatch(uiActions.toggle());
    };

    return (
        <button className={styles.button} onClick={onClickHandler}>
            <span>My Cart</span>
            <span className={styles.badge}>1</span>
        </button>
    );
};

export default CartButton;

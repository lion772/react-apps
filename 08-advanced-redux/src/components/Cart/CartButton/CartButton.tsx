import React, { FC } from "react";
import styles from "./CartButton.module.css";

interface CartButtonProps {}

const CartButton: FC<CartButtonProps> = () => {
    return (
        <button className={styles.button}>
            <span>My Cart</span>
            <span className={styles.badge}>1</span>
        </button>
    );
};

export default CartButton;

import React, { FC } from "react";
import styles from "./CartItem.module.css";

interface CartItemProps {
    item: any;
}

const CartItem: FC<CartItemProps> = (props) => {
    const { title, quantity, total, price } = props.item;

    return (
        <li className={styles.item}>
            <header>
                <h3>{title}</h3>
                <div className={styles.price}>
                    ${total.toFixed(2)}{" "}
                    <span className={styles.itemprice}>
                        (${price.toFixed(2)}/item)
                    </span>
                </div>
            </header>
            <div className={styles.details}>
                <div className={styles.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={styles.actions}>
                    <button>-</button>
                    <button>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;

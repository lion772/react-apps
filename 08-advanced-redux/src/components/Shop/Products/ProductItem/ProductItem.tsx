import React, { FC, Key } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../store/cart-slice";
import Card from "../../../UI/Card/Card";
import styles from "./ProductItem.module.css";

interface ProductItemProps {
    id: string;
    name: string;
    price: number;
    description: string;
    quantity: number;
    totalPrice: number;
}

const ProductItem: FC<ProductItemProps> = (props) => {
    const dispatch = useDispatch();

    const onClickAddHandler = () => {
        dispatch(cartActions.addItemToCart(props));
    };

    return (
        <li className={styles.item}>
            <Card>
                <header>
                    <h3>{props.name}</h3>
                    <div className={styles.price}>
                        ${props.price.toFixed(2)}
                    </div>
                </header>
                <p>{props.description}</p>
                <div className={styles.actions}>
                    <button onClick={onClickAddHandler}>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
};

export default ProductItem;

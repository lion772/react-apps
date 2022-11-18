import React, { FC, Key } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../../store/cart-slice";
import Card from "../../../UI/Card/Card";
import styles from "./ProductItem.module.css";

interface ProductItemProps {
    key: Key;
    id: string;
    name: string;
    price: number;
    description: string;
    quantity: number;
    totalPrice: number;
}

const ProductItem: FC<ProductItemProps> = (props) => {
    console.log(props);
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

    return (
        <li className={styles.item}>
            <Card>
                <header>
                    <h3>{product.name}</h3>
                    <div className={styles.price}>
                        ${product.price.toFixed(2)}
                    </div>
                </header>
                <p>{product.description}</p>
                <div className={styles.actions}>
                    <button onClick={onClickAddHandler}>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
};

export default ProductItem;

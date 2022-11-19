import React, { FC } from "react";
import { useDispatch } from "react-redux";
import useHttp from "../../../../hooks/use-http/use-http";
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
    const { isLoading, error, sendRequest } = useHttp();

    const onClickAddHandler = () => {
        dispatch(cartActions.addItemToCart(props));

        /*  const requestConfig = {
            url: "https://react-http-movies-feb4c-default-rtdb.firebaseio.com/products-advanced-redux.json",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: props,
        };

        sendProduct(requestConfig, retrieveDataFromBackend); */
    };

    /* function retrieveDataFromBackend(data: any) {
        console.log(data);
    } */

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
            {!isLoading && error && <p>{error}</p>}
        </li>
    );
};

export default ProductItem;

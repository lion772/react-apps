import React, { lazy, Suspense } from "react";
import { Item } from "../../../store/cart-slice";

const LazyCartItem = lazy(() => import("./CartItem"));

const item: Item = {
    id: "1",
    name: "sushi",
    quantity: 1,
    price: 2.99,
    totalPrice: 2.99,
    description: "fresh and delicous food",
};

const CartItem = (
    props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
    <Suspense fallback={null}>
        <LazyCartItem item={item} {...props} />
    </Suspense>
);

export default CartItem;

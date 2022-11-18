import React, { lazy, Suspense } from "react";

const LazyCartItem = lazy(() => import("./CartItem"));

const CartItem = (
    props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
    <Suspense fallback={null}>
        <LazyCartItem item={undefined} {...props} />
    </Suspense>
);

export default CartItem;

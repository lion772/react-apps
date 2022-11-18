import React, { lazy, Suspense } from 'react';

const LazyCartButton = lazy(() => import('./CartButton'));

const CartButton = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCartButton {...props} />
  </Suspense>
);

export default CartButton;

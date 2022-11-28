import React, { lazy, Suspense } from 'react';

const LazyProductItem = lazy(() => import('./ProductItem'));

const ProductItem = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyProductItem {...props} />
  </Suspense>
);

export default ProductItem;

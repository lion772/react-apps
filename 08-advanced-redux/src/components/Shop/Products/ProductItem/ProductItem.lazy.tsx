import React, { lazy, Suspense } from 'react';

const LazyProductItem = lazy(() => import('./ProductItem'));

const ProductItem = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyProductItem title={''} price={0} description={''} {...props} />
  </Suspense>
);

export default ProductItem;

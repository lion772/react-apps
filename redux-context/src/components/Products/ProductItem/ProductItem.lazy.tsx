import React, { lazy, Suspense } from 'react';

const LazyProductItem = lazy(() => import('./ProductItem'));

const ProductItem = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyProductItem id={''} isFavorite={false} description={''} title={''} {...props} />
  </Suspense>
);

export default ProductItem;

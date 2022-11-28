import React, { lazy, Suspense } from 'react';

const LazyFavoriteItem = lazy(() => import('./FavoriteItem'));

const FavoriteItem = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFavoriteItem {...props} />
  </Suspense>
);

export default FavoriteItem;

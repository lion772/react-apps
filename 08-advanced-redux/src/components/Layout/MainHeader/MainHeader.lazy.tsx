import React, { lazy, Suspense } from 'react';

const LazyMainHeader = lazy(() => import('./MainHeader'));

const MainHeader = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMainHeader {...props} />
  </Suspense>
);

export default MainHeader;

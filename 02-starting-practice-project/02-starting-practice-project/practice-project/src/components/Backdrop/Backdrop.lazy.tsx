import React, { lazy, Suspense } from 'react';

const LazyBackdrop = lazy(() => import('./Backdrop'));

const Backdrop = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyBackdrop {...props} />
  </Suspense>
);

export default Backdrop;

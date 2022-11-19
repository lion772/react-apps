import React, { lazy, Suspense } from 'react';

const LazyNotification = lazy(() => import('./Notification'));

const Notification = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyNotification status={''} title={''} message={''} {...props} />
  </Suspense>
);

export default Notification;

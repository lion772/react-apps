import React, { lazy, Suspense } from "react";

const LazyAuthPage = lazy(() => import("./AuthPage"));

const AuthForm = (
    props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
    <Suspense fallback={<p>Loading...</p>}>
        <LazyAuthPage {...props} />
    </Suspense>
);

export default AuthForm;

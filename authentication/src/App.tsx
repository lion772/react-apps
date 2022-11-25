import React, { Suspense } from "react";
import "./App.css";
import { createRoutesFromElements, Route, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage, { actionSignUp } from "./pages/AuthPage/AuthPage";
import UserProfile from "./components/Profile/UserProfile";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import SignInPage, { actionSignIn } from "./pages/SignInPage/SignInPage";

const SuspenseLayout = () => (
    <Suspense fallback={null}>
        <Layout />
    </Suspense>
);

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<SuspenseLayout />} errorElement={<NotFoundPage />}>
            <Route index element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} action={actionSignUp} />
            <Route
                path="/sign-in"
                element={<SignInPage />}
                action={actionSignIn}
            />
            <Route path="/profile" element={<UserProfile />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

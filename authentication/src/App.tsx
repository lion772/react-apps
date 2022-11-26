import React, { Suspense } from "react";
import "./App.css";
import {
    createRoutesFromElements,
    Navigate,
    Route,
    RouterProvider,
} from "react-router";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage, { actionSignUp } from "./pages/AuthPage/AuthPage";
import UserProfile from "./components/Profile/UserProfile";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import SignInPage, { actionSignIn } from "./pages/SignInPage/SignInPage";
import Layout from "./components/Layout/Layout";
import { PrivateRoute } from "./pages/PrivatePage/PrivatePage";

const SuspenseLayout = () => (
    <Suspense fallback={null}>
        <Layout />
    </Suspense>
);

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<SuspenseLayout />} errorElement={<NotFoundPage />}>
            <Route index element={<HomePage />} />
            <Route
                path="/auth"
                element={
                    <PrivateRoute>
                        <AuthPage />
                    </PrivateRoute>
                }
                action={actionSignUp}
            />
            <Route
                path="/sign-in"
                element={<SignInPage />}
                action={actionSignIn}
            />
            <Route
                path="/profile"
                element={
                    <PrivateRoute>
                        <UserProfile />
                    </PrivateRoute>
                }
            />
            <Route path="*" element={<Navigate to={"/"} />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;

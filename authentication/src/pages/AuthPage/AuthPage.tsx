import React, { FC } from "react";
import AuthForm from "./AuthPage.lazy";

interface AuthPageProps {}

const AuthPage: FC<AuthPageProps> = () => {
    return <AuthForm />;
};

export default AuthPage;

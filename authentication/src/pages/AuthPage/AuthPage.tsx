import React, { FC } from "react";
import AuthForm from "../../components/Auth/AuthForm";
import { signUp } from "../../utils/api";

interface AuthPageProps {}

const AuthPage: FC<AuthPageProps> = () => {
    return <AuthForm />;
};

export default AuthPage;

export async function actionSignUp({ request }: { request: any }) {
    const data = await request.formData();
    const responseJson = await signUp(data.get("email"), data.get("password"));
}

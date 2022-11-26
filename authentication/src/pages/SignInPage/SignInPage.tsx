import { Fragment, useContext, useEffect } from "react";
import {  useActionData, useNavigate } from "react-router";
import { AuthContext } from "../../store/auth-context";
import { signIn } from "../../utils/api";

const SignInPage = () => {
    const { isLoggedIn, onLogin, getToken } = useContext(AuthContext);
    const navigate = useNavigate();
    const data = useActionData() as any;

    useEffect(() => {
        if (data) {
            getToken(data.idToken);
            onLogin();
            setTimeout(() => {
                return navigate("/profile");
            }, 1000);
        }
    }, [data, getToken, isLoggedIn, navigate, onLogin]);

    return (
        <> {isLoggedIn && <h1 className="centered">You're logged in!</h1>}</>
    );
};
export default SignInPage;

export async function actionSignIn({ request }: { request: any }) {
    const data = await request.formData();
    const res = await signIn(data.get("email"), data.get("password"));
    return res;
}

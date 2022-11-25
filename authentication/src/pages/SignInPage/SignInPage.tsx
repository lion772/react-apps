import { signIn } from "../../utils/api";

const SignInPage = () => {
    return <p>You have logged in!</p>;
};
export default SignInPage;

export async function actionSignIn({ request }: { request: any }) {
    const data = await request.formData();
    const validationError = await signIn(
        data.get("email"),
        data.get("password")
    );
    if (validationError) {
        return validationError;
    }
    console.log(validationError);
}

import { signIn } from "../../utils/api";

const SignInPage = () => {
    return <p>You have logged in!</p>;
};
export default SignInPage;

export async function actionSignIn({ request }: { request: any }) {
    const data = await request.formData();
    console.log(request);
    const responseJson = await signIn(data.get("email"), data.get("password"));
    console.log(responseJson);
}

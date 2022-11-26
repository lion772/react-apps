import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../store/auth-context";
import { changePassword } from "../../utils/api";
import ProfileForm from "./ProfileForm";
import classes from "./UserProfile.module.css";

const UserProfile = () => {
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const changePasswordHandler = async (password: string) => {
        console.log(password);
        const res = await changePassword(token, password);
        console.log(res);

        if (res.error) {
            console.log("error: ", res.error);
            setError(res.message);
        }
        console.log(res);
        navigate("/");
    };

    if (error.length > 0) {
        return (
            <div className="centered">
                <h1>{error}</h1>
                <button onClick={() => setError("")}>Try again</button>
            </div>
        );
    }
    return (
        <section className={classes.profile}>
            <h1>Your User Profile</h1>
            <ProfileForm getPassword={changePasswordHandler} />
        </section>
    );
};

export default UserProfile;

/* export async function changePasswordAction({ request }: { request: any }) {
    const data = await request.formData();
    const res = await changePassword(data.get("password"));
}
 */

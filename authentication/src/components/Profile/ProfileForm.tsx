import { FC, SyntheticEvent, useRef } from "react";
import classes from "./ProfileForm.module.css";

interface IProfileForm {
    getPassword: (password: string) => void;
}

const ProfileForm: FC<IProfileForm> = ({ getPassword }) => {
    const enteredPassword = useRef<HTMLInputElement>(null);

    const submitHandler = (e: SyntheticEvent) => {
        e.preventDefault();
        getPassword(enteredPassword.current?.value as string);
    };
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="new-password">New Password</label>
                <input
                    type="password"
                    id="new-password"
                    name="password"
                    minLength={7}
                    ref={enteredPassword}
                />
            </div>
            <div className={classes.action}>
                <button>Change Password</button>
            </div>
        </form>
    );
};

export default ProfileForm;

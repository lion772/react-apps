import React, { useRef, useState } from "react";
import classes from "./AuthForm.module.css";
import { Form } from "react-router-dom";

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    /* const submitHandler = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        const enteredEmail = emailInputRef.current?.value;
        const enteredPassword = passwordInputRef.current?.value;

        //optional: add validation

        if (isLogin) {
            try {
                await signIn(enteredEmail, enteredPassword);
            } catch (error) {
                throw new Error((error as Error).message);
            }
        } else {
            try {
                await signUp(enteredEmail, enteredPassword);
            } catch (error) {
                throw new Error((error as Error).message);
            }
        }
    }; */

    return (
        <section className={classes.auth}>
            <h1>{isLogin ? "Login" : "Sign Up"}</h1>
            <Form method={"post"} action={isLogin ? "/sign-in" : "/auth"}>
                <div className={classes.control}>
                    <label htmlFor="email">Your Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        ref={emailInputRef}
                        required
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="password">Your Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        ref={passwordInputRef}
                        required
                    />
                </div>
                <div className={classes.actions}>
                    <button>{isLogin ? "Login" : "Create Account"}</button>
                    <button
                        type="button"
                        className={classes.toggle}
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin
                            ? "Create new account"
                            : "Login with existing account"}
                    </button>
                </div>
            </Form>
        </section>
    );
};

export default AuthForm;

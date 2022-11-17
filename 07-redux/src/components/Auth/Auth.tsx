import React, { FC, useRef } from "react";
import styles from "./Auth.module.css";
import { authActions } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";

interface AuthProps {}

const Auth: FC<AuthProps> = () => {
    const email = useRef<any>();
    const password = useRef<any>();

    const dispath = useDispatch();

    function onSubmitHandler(e: React.SyntheticEvent) {
        e.preventDefault();
        console.log(email.current.value, password.current.value);
        dispath(authActions.login());
    }
    return (
        <>
            <main className={styles.auth}>
                <section>
                    <form onSubmit={onSubmitHandler}>
                        <div className={styles.control}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" ref={email} />
                        </div>
                        <div className={styles.control}>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                ref={password}
                            />
                        </div>
                        <button>Login</button>
                    </form>
                </section>
            </main>
        </>
    );
};

export default Auth;

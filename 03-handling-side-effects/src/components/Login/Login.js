import React, {
    useState,
    useEffect,
    useReducer,
    useContext,
    useRef,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
    switch (action.type) {
        case "USER_INPUT":
            return { value: action.val, isValid: action.val.includes("@") };

        case "INPUT_BLUR":
            return {
                value: state.value,
                isValid: state.value.includes("@"),
            };

        default:
            return { value: "", isValid: false };
    }
};

const passwordReducer = (state, action) => {
    if (action.type === "PASSWORD_INPUT") {
        return { value: action.val, isValid: action.val.trim().length > 6 };
    }
    if (action.type === "INPUT_BLUR") {
        return { value: state.value, isValid: state.value.trim().length > 6 };
    }
    return { value: "", isValid: false };
};

const Login = () => {
    //const [enteredEmail, setEnteredEmail] = useState("");
    //const [emailIsValid, setEmailIsValid] = useState(false);
    //const [enteredPassword, setEnteredPassword] = useState("");
    //const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);
    const { onLogin } = useContext(AuthContext);

    //const [state, dispatch] = useReducer(reducerFn, initialState, initFn)

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValid: null,
    });

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: "",
        isValid: null,
    });

    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log("check for validity");
            setFormIsValid(emailIsValid && passwordIsValid);
        }, 500);

        return () => {
            console.log("clean up");
            clearTimeout(identifier);
        };
    }, [emailIsValid, passwordIsValid]);

    const emailChangeHandler = (event) => {
        //setEnteredEmail(event.target.value);
        dispatchEmail({ type: "USER_INPUT", val: event.target.value });

        /* setFormIsValid(
            emailState.isValid && passwordState.value.trim().length > 6
        ); */
    };

    const passwordChangeHandler = (event) => {
        //setEnteredPassword(event.target.value);
        dispatchPassword({ type: "PASSWORD_INPUT", val: event.target.value });

        /* setFormIsValid(
            emailState.isValid && passwordState.value.trim().length > 6
        ); */
    };

    const validateEmailHandler = () => {
        //setEmailIsValid(emailState.isValid);
        dispatchEmail({ type: "INPUT_BLUR" });
    };

    const validatePasswordHandler = () => {
        //setPasswordIsValid(enteredPassword.trim().length > 6);
        dispatchPassword({ type: "INPUT_BLUR" });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (formIsValid) {
            onLogin(emailState.value, passwordState.value);
        } else if (!emailIsValid) {
            emailInputRef.current.focus();
        } else if (!passwordIsValid) {
            passwordInputRef.current.focus();
        }
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input
                    ref={emailInputRef}
                    label={"Username"}
                    type={"email"}
                    id={"username"}
                    onBlur={validateEmailHandler}
                    isValid={emailState.isValid}
                    value={emailState.value}
                    onChange={emailChangeHandler}
                />

                <Input
                    ref={passwordInputRef}
                    label={"Password"}
                    type={"password"}
                    id={"password"}
                    onBlur={validatePasswordHandler}
                    isValid={passwordState.isValid}
                    value={passwordState.value}
                    onChange={passwordChangeHandler}
                />

                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;

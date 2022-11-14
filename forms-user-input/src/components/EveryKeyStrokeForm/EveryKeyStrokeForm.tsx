import { FormEvent, useEffect, useState } from "react";
import UseInput from "../../hooks/use-input/use-input";

const SimpleInput = () => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== "";
    const enteredEmailIsValid =
        enteredEmail.trim() !== "" && enteredEmail.includes("@");
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

    const overallInputIsValid = enteredNameIsValid && enteredEmailIsValid;

    const formSubmissionHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (!overallInputIsValid) {
            return;
        }
        console.log("overall input is valid!");
        setIsSubmitted(true);
    };

    const onSubmitReset = () => {
        setIsSubmitted(false);
    };

    const onChangeHandler = (type: string, nameEntered: string) => {
        console.log(type === "name");
        type === "name"
            ? setEnteredName(nameEntered)
            : setEnteredEmail(nameEntered);
    };
    const onBlurHandler = (type: string, isBlur: boolean) => {
        console.log(isBlur);
        type === "name"
            ? setEnteredNameTouched(isBlur)
            : setEnteredEmailTouched(isBlur);
    };

    return (
        <form onSubmit={formSubmissionHandler}>
            <UseInput
                inputName={"name"}
                onChange={onChangeHandler.bind(null, "name")}
                onBlur={onBlurHandler.bind(null, "name")}
                onSubmitted={isSubmitted}
                onSubmitReset={onSubmitReset}
            />

            <UseInput
                inputName={"email"}
                onChange={onChangeHandler.bind(null, "email")}
                onBlur={onBlurHandler.bind(null, "email")}
                onSubmitted={isSubmitted}
                onSubmitReset={onSubmitReset}
            />
           
            {nameInputIsInvalid && (
                <p className="error-text">Name must not be empty.</p>
            )}
            {emailInputIsInvalid && (
                <p className="error-text">Enter a valid email.</p>
            )}
            <div className="form-actions">
                <button disabled={!overallInputIsValid}>Submit</button>
                {/* disabled={!overallInputIsValid} */}
            </div>
        </form>
    );
};

export default SimpleInput;

/* const nameInputChangeHandler = (event: FormEvent<HTMLInputElement>) => {
        setEnteredName(event.currentTarget.value);
    };

    const nameInputBlurHandler = (event: FormEvent<HTMLInputElement>) => {
        setEnteredNameTouched(true);
    };

    const emailInputChangeHandler = (event: FormEvent<HTMLInputElement>) => {
        setEnteredEmail(event.currentTarget.value);
    };

    const emailInputBlurHandler = (event: FormEvent<HTMLInputElement>) => {
        setEnteredEmailTouched(true);
    };
 */

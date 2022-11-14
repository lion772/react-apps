import React, { FC } from "react";
import useInput from "../../hooks/use-input/use-input-max/use-input-max";

interface BasicFormProps {}

const BasicForm: FC<BasicFormProps> = () => {
    const {
        value: enteredFirstName,
        isValid: enteredFirstNameIsValid,
        hasError: firstNameInputHasError,
        valueChangeHandler: firstNameChangedHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: resetFirstNameInput,
    } = useInput((value: string) => value.trim() !== "");

    const {
        value: enteredLastName,
        isValid: enteredLastNameIsValid,
        hasError: lastNameInputHasError,
        valueChangeHandler: lastNameChangedHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: resetLastNameInput,
    } = useInput((value: string) => value.trim() !== "");
    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useInput((value: string) => value.includes("@"));

    function formSubmissionHandler(e: React.SyntheticEvent) {
        e.preventDefault();

        if (
            !enteredFirstNameIsValid &&
            !enteredLastNameIsValid &&
            !enteredEmailIsValid
        ) {
            return;
        }
        console.log("Form has been successfully submitted!");

        resetFirstNameInput();
        resetLastNameInput();
        resetEmailInput();
    }

    const firstNameInputClasses = !firstNameInputHasError
        ? "form-control"
        : "form-control invalid";
    const lastNameInputClasses = !lastNameInputHasError
        ? "form-control"
        : "form-control invalid";
    const emailInputClasses = !emailInputHasError
        ? "form-control"
        : "form-control invalid";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={firstNameInputClasses}>
                <label htmlFor="name">Your First Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={firstNameChangedHandler}
                    onBlur={firstNameBlurHandler}
                    value={enteredFirstName}
                />
                {firstNameInputHasError && (
                    <p className="error-text">First Name must not be empty.</p>
                )}
            </div>
            <div className={lastNameInputClasses}>
                <label htmlFor="name">Your Last Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={lastNameChangedHandler}
                    onBlur={lastNameBlurHandler}
                    value={enteredLastName}
                />
                {lastNameInputHasError && (
                    <p className="error-text">Last Name must not be empty.</p>
                )}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="name">Your Email</label>
                <input
                    type="text"
                    id="name"
                    onChange={emailChangedHandler}
                    onBlur={emailBlurHandler}
                    value={enteredEmail}
                />
                {emailInputHasError && (
                    <p className="error-text">Please enter a valid email.</p>
                )}
            </div>
            <button
                className="form-actions"
                disabled={
                    !enteredFirstNameIsValid &&
                    !enteredLastNameIsValid &&
                    !enteredEmailIsValid
                }
            >
                Submit
            </button>
        </form>
    );
};

export default BasicForm;

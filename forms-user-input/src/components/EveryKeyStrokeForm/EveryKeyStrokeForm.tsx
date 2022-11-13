import { FormEvent, useEffect, useState } from "react";

const SimpleInput = () => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== "";
    const enteredAgeIsValid = false; //enteredName.trim() !== "";
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
    const overallInputIsValid = enteredNameIsValid && enteredAgeIsValid;

    const nameInputChangeHandler = (event: FormEvent<HTMLInputElement>) => {
        setEnteredName(event.currentTarget.value);
    };

    const nameInputBlurHandler = (event: FormEvent<HTMLInputElement>) => {
        setEnteredNameTouched(true);
    };

    const formSubmissionHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();
        setEnteredNameTouched(true);

        if (!overallInputIsValid) {
            return;
        }
        console.log("overall input is valid!");
        setEnteredName("");
        setEnteredNameTouched(false);
    };

    const nameInputClasses = nameInputIsInvalid
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name (Keystroke)</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
                    value={enteredName}
                />
                {nameInputIsInvalid && (
                    <p className="error-text">Name must not be empty.</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!overallInputIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;

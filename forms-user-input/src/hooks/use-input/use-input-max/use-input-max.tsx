import { FC, FormEvent, useState } from "react";

type IUseInput = (value: string) => boolean;

const useInput = (validateValue: IUseInput) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event: FormEvent<HTMLInputElement>) => {
        setEnteredValue(event.currentTarget.value);
    };

    const inputBlurHandler = (event: FormEvent<HTMLInputElement>) => {
        setIsTouched(true);
    };

    const reset = () => {
        setEnteredValue("");
        setIsTouched(false);
    };

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset,
    };
};

export default useInput;

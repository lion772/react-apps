import React, { FC, useState } from "react";
import styles from "./NewExpense.module.css";

interface ExpenseFormProps {}

const ExpenseForm: FC<ExpenseFormProps> = () => {
    //const [title, setTitle] = useState<string>("");
    //const [date, setDate] = useState<string>("");
    //const [amount, setAmount] = useState<string>("");

    const [userInput, setUserInput] = useState({
        expenseName: "",
        date: "",
        amount: "",
    });

    const titleChangeHandler = (e: React.FormEvent<HTMLInputElement>) =>
        setUserInput({ ...userInput, expenseName: e.currentTarget.value });
    const dateChangeHandler = (e: React.FormEvent<HTMLInputElement>) =>
        setUserInput({ ...userInput, date: e.currentTarget.value });
    const amountChangeHandler = (e: React.FormEvent<HTMLInputElement>) =>
        setUserInput({ ...userInput, amount: e.currentTarget.value });

    const clickHandler = (e: any) => {
        e.preventDefault();
    };

    return (
        <form>
            <div>
                Test: {userInput.expenseName} {userInput.date}{" "}
                {userInput.amount}
            </div>
            <div className={styles.NewExpense__controls}>
                <div className={styles.NewExpense__control}>
                    <label>Title</label>
                    <input
                        type="text"
                        onChange={(e) => titleChangeHandler(e)}
                    />
                </div>
                <div className={styles.NewExpense__control}>
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        onChange={(e) => amountChangeHandler(e)}
                    />
                </div>
                <div className={styles.NewExpense__control}>
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2024-12-31"
                        onChange={(e) => dateChangeHandler(e)}
                    />
                </div>
            </div>
            <button
                className={`styles.NewExpense button`}
                type="submit"
                onClick={(e) => clickHandler(e as any)}
            >
                Add new expense
            </button>
        </form>
    );
};

export default ExpenseForm;

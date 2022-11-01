import React, { FC, useState } from "react";
import ExpenseForm from "./ExpenseForm";
import IExpenseFunction from "./IExpenseFunction";
import styles from "./NewExpense.module.css";

const NewExpense: FC<IExpenseFunction> = ({ getExpense }) => {
    const [createExpense, setCreateExpense] = useState<boolean>(false);

    const expenseWasCreatedHandler = (isCreated: boolean) => {
        setCreateExpense(!isCreated);
    };

    const expenseWasCanceled = (isCanceled: boolean) => {
        setCreateExpense(!isCanceled);
    };

    if (!createExpense) {
        return (
            <div className={styles.NewExpense}>
                <button onClick={() => setCreateExpense(!createExpense)}>
                    Create expense
                </button>
            </div>
        );
    }

    return (
        <div className={styles.NewExpense}>
            <ExpenseForm
                expenseResult={expenseWasCreatedHandler}
                expenseCanceled={expenseWasCanceled}
                getExpense={getExpense}
            />
        </div>
    );
};

export default NewExpense;

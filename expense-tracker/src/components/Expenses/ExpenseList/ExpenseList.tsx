import React, { FC } from "react";
import { ExpenseCreated } from "../../../ExpenseCreated";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import styles from "./ExpenseList.module.css";

interface ExpenseListProps {
    filteredExpenses: ExpenseCreated[];
}

const ExpenseList: FC<ExpenseListProps> = ({
    filteredExpenses,
}): JSX.Element => {
    const filterListHandler = (filteredExpenses: ExpenseCreated[]) => {
        return filteredExpenses.map((expense: ExpenseCreated) => {
            return (
                <ExpenseItem
                    //set unique id per list item to help React identify the individual item
                    key={expense.id}
                    date={expense.date}
                    title={expense.title}
                    amount={String(expense.amount)}
                />
            );
        });
    };

    if (filteredExpenses.length === 0) {
        return (
            <p className={styles.Expenses}>
                There's no data to be displayed on the screen
            </p>
        );
    }

    return <>{filterListHandler(filteredExpenses)}</>;
};

export default ExpenseList;

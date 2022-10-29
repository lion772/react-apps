import React, { FC } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import styles from "./Expenses.module.css";

interface ExpensesProps {
    expenses: any;
}

const Expenses: FC<ExpensesProps> = (props): JSX.Element => (
    <Card className={styles.Expenses}>
        <ExpenseItem
            date={props.expenses[0].date}
            title={props.expenses[0].title}
            amount={String(props.expenses[0].amount)}
        />
        <ExpenseItem
            date={props.expenses[1].date}
            title={props.expenses[1].title}
            amount={String(props.expenses[1].amount)}
        />
        <ExpenseItem
            date={props.expenses[2].date}
            title={props.expenses[2].title}
            amount={String(props.expenses[2].amount)}
        />
        <ExpenseItem
            date={props.expenses[3].date}
            title={props.expenses[3].title}
            amount={String(props.expenses[3].amount)}
        />
    </Card>
);

export default Expenses;

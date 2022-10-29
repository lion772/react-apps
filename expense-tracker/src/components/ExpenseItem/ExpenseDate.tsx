import { FC } from "react";
import classes from "./ExpenseDate.module.css";

interface IExpenseDate {
    date: Date;
}

const ExpenseDate: FC<IExpenseDate> = ({ date }): JSX.Element => {
    const year = date.toLocaleString("en-US", { year: "numeric" });
    const month = date.toLocaleString("en-US", { month: "long" });
    const day = date.toLocaleString("en-US", { day: "2-digit" });

    return (
        <>
            <div className={classes.ExpenseDate}>
                <div> {year}</div>
                <div> {month}</div>
                <div> {day}</div>
            </div>
        </>
    );
};

export default ExpenseDate;

import { FC } from "react";

interface IExpenseDate {
    date: Date;
}

const ExpenseDate: FC<IExpenseDate> = ({ date }): JSX.Element => {
    const year = date.toLocaleString("en-US", { year: "numeric" });
    const month = date.toLocaleString("en-US", { month: "long" });
    const day = date.toLocaleString("en-US", { day: "2-digit" });

    return (
        <>
            <div>
                <div>Year: {year}</div>
                <div>Month: {month}</div>
                <div>Day: {day}</div>
            </div>
        </>
    );
};

export default ExpenseDate;

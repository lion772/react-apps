import React, { FC, useState } from "react";
import { ExpenseCreated } from "../../ExpenseCreated";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import styles from "./Expenses.module.css";

interface ExpensesProps {
    expenses: ExpenseCreated[];
}

const Expenses: FC<ExpensesProps> = ({ expenses }): JSX.Element => {
    const [selectedYear, setPickYear] = useState<string>("2020");

    const onChangeYear = (year: string) => {
        setPickYear(year);
    };

    return (
        <>
            <Card className={styles.Expenses}>
                <ExpenseFilter
                    selectedYear={selectedYear}
                    getYearPicklist={onChangeYear}
                />
                {expenses.map((expense) => {
                    return (
                        <ExpenseItem
                            date={expense.date}
                            title={expense.title}
                            amount={String(expense.amount)}
                        />
                    );
                })}
            </Card>
        </>
    );
};

export default Expenses;

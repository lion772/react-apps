import React, { FC, useState } from "react";
import { ExpenseCreated } from "../../ExpenseCreated";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import ExpenseList from "./ExpenseList/ExpenseList";
import styles from "./Expenses.module.css";
import ExpensesChart from "./ExpensesChart/ExpensesChart";

interface ExpensesProps {
    expenses: ExpenseCreated[];
}

const Expenses: FC<ExpensesProps> = ({ expenses }): JSX.Element => {
    const [selectedYear, setPickYear] = useState<string>("2021");

    const onChangeYear = (year: string) => {
        setPickYear(year);
    };

    const filteredExpenses = expenses.filter(
        (expenseFiltered: ExpenseCreated) =>
            expenseFiltered.date.getFullYear() === Number(selectedYear)
    );

    return (
        <>
            <Card className={styles.Expenses}>
                <ExpensesChart
                    expensesList={filteredExpenses}
                />
                <ExpenseFilter
                    selectedYear={selectedYear}
                    getYearPicklist={onChangeYear}
                />
                <ExpenseList filteredExpenses={filteredExpenses} />
            </Card>
        </>
    );
};

export default Expenses;

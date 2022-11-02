import React, { FC } from "react";
import { ExpenseCreated, IChart } from "../../../ExpenseCreated";
import Chart from "../../Chart/Chart";
import styles from "./ExpensesChart.module.css";

interface IExpensesChart {
    expensesList: ExpenseCreated[];
}

const ExpensesChart: FC<IExpensesChart> = ({ expensesList }): JSX.Element => {
    const chartsDataPoints: IChart[] = [
        { id: "1", value: "0", maxValue: "100", minValue: "1", label: "Jan" },
        { id: "2", value: "0", maxValue: "100", minValue: "1", label: "Feb" },
        { id: "3", value: "0", maxValue: "100", minValue: "1", label: "Mar" },
        { id: "4", value: "0", maxValue: "100", minValue: "1", label: "Apr" },
        { id: "5", value: "0", maxValue: "100", minValue: "1", label: "May" },
        { id: "6", value: "0", maxValue: "100", minValue: "1", label: "Jun" },
        { id: "7", value: "0", maxValue: "100", minValue: "1", label: "Jul" },
        { id: "8", value: "0", maxValue: "100", minValue: "1", label: "Aug" },
        { id: "9", value: "0", maxValue: "100", minValue: "1", label: "Sep" },
        { id: "10", value: "0", maxValue: "100", minValue: "1", label: "Oct" },
        { id: "11", value: "0", maxValue: "100", minValue: "1", label: "Nov" },
        { id: "12", value: "0", maxValue: "100", minValue: "1", label: "Dec" },
    ];

    for (let expense of expensesList) {
        let expenseMonth = expense.date.getMonth(); //Use months as index in chartsDataPoints
        chartsDataPoints[expenseMonth].value = String(expense.amount);
    }
    return (
        <div className={styles.ExpensesChart}>
            <Chart charts={chartsDataPoints} />
        </div>
    );
};

export default ExpensesChart;

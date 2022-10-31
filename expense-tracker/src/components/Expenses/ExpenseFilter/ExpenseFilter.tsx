import React, { FC } from "react";
import styles from "./ExpenseFilter.module.css";

interface ExpenseFilterProps {
    selectedYear: string;
    getYearPicklist: Function;
}

const ExpenseFilter: FC<ExpenseFilterProps> = ({
    selectedYear,
    getYearPicklist,
}) => {
    const pickYearList = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        console.log(e.target.value);
        getYearPicklist(e.target.value);
    };

    return (
        <div className={styles.ExpensesFilter}>
            <div className={styles.ExpensesFilter__control}>
                <label>Filter by year</label>
                <select value={selectedYear} onChange={pickYearList}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;

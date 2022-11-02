import React, { FC } from "react";
import { IChart } from "../../ExpenseCreated";
import styles from "./Chart.module.css";
import ChartBar from "./ChartBar";

interface ChartProps {
    charts: IChart[];
}

const Chart: FC<ChartProps> = ({ charts }): JSX.Element => {
    const chartValues = charts.map((dataPoint) => Number(dataPoint.value));
    const maxValue = Math.max(...chartValues);

    const chartsRendering = charts.map((chart) => {
        return (
            <ChartBar
                key={chart.id}
                value={chart.value}
                maxValue={maxValue}
                minValue={chart.minValue}
                label={chart.label}
            />
        );
    });

    return <div className={styles.Chart}>{chartsRendering}</div>;
};

export default Chart;

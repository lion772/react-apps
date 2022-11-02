import React, { FC, Key } from "react";
import styles from "./ChartBar.module.css";

interface ChartBarProps {
    key: Key | null | undefined;
    value: string;
    maxValue: number;
    minValue: string;
    label: string;
}

const ChartBar: FC<ChartBarProps> = ({ value, maxValue, minValue, label }) => {
    let barFillHeight = "0%";

    if (maxValue > 0) {
        barFillHeight =
            String(Math.round((Number(value) / maxValue) * 100)) + "%";
    }
    return (
        <div className={styles.ChartBar}>
            <div className={styles.ChartBar__inner}>
                <div
                    className={styles.ChartBar__fill}
                    style={{ height: barFillHeight }}
                ></div>
            </div>
            <div className={styles.ChartBar__label}>{label}</div>
        </div>
    );
};

export default ChartBar;

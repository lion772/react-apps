export interface ExpenseCreated {
    id: string;
    title: string;
    date: Date;
    amount: number;
}

export interface IChart {
    id: string;
    value: string;
    maxValue: string;
    minValue: string;
    label: string;
}

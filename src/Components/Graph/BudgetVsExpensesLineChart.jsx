// BudgetVsExpensesLineChart.jsx
import React from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useGlobalDataContext } from '../../Contexts/DataContext';
const BudgetVsExpensesLineChart = () => {

    Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale)
    Chart.defaults.color = "#80ffdb";
    const { expense } = useGlobalDataContext()
    const budgets = expense.map((single) => {
        return expense.amount
    })
    const labels = expense.map((single) => {
        return single.category
    })
    const expenses = expense.map((single) => {
        return single.currentamount
    })
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Monthly Budget',
                borderColor: '#3498db',
                data: budgets,
            },
            {
                label: 'Expenses',
                borderColor: '#e74c3c',
                data: expenses,
            },
        ],
    };

    return <Line data={data} />;
};

export default BudgetVsExpensesLineChart;

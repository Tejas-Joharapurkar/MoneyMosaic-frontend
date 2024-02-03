import React from 'react';
import { Chart, ArcElement, Title } from 'chart.js';
import { useGlobalDataContext } from '../../Contexts/DataContext';
import { Pie } from 'react-chartjs-2';

const ExpensesPieChart = () => {
    Chart.register(ArcElement, Title)
    const { expense } = useGlobalDataContext()
    const labels = expense.map((single) => {
        return single.category
    })
    const amount = expense.map((single) => {
        return single.amount
    })
    const data = {
        labels: labels,
        datasets: [
            {
                data: expense.map((expense) => expense.currentamount),
                backgroundColor: ['#3498db', '#2ecc71', '#e74c3c', '#f39c12', '#9b59b6'],
            },
        ],
    };
    return <Pie data={data} />;
};

export default ExpensesPieChart;

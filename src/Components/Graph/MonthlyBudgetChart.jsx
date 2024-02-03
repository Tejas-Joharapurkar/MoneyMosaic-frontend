// MonthlyBudgetChart.jsx

import React from 'react';
import { useGlobalDataContext } from '../../Contexts/DataContext'
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, BarController, BarElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';
const MonthlyBudgetChart = () => {
    Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, BarController, BarElement);
    Chart.defaults.color = "#80ffdb";
    const { budget, currentbudget } = useGlobalDataContext()
    const monthlyBudget = budget
    const currentBudget = currentbudget
    const data = {
        labels: ['Monthly Budget', 'Current Budget'],
        datasets: [
            {
                label: 'Budget',
                backgroundColor: ['#3498db', '#2ecc71'],
                data: [monthlyBudget, currentBudget],
            },
        ],
    };

    return <Bar data={data} />;
};

export default MonthlyBudgetChart;
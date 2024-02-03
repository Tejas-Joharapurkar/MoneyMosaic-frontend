// MonthlyBudgetChart.jsx

import React from 'react';
import { useGlobalDataContext } from '../../Contexts/DataContext'
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, BarController, BarElement } from 'chart.js';
import { Bar } from 'react-chartjs-2';

const CategoryCurrentAmountBarChart = () => {
    Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, BarController, BarElement);
    Chart.defaults.color = "#fca311";
    const { expense } = useGlobalDataContext()
    const data = {
        labels: expense.map((expense) => expense.category),
        datasets: [
            {
                label: 'Current Amount',
                backgroundColor: '#80ffdb',
                data: expense.map((expense) => expense.currentamount),
            },
        ],
    };
    const options = {
        scales: {
            x: {
                grid: {
                    color: 'rgba(255,0,0,0.4)',
                    borderColor: 'red'
                }
            },
            y: {
                grid: {
                    color: 'rgba(0,255,0,0.4)',
                    borderColor: 'green'
                }
            }
        }
    };

    return < Bar data={data} options={options} />
};

export default CategoryCurrentAmountBarChart;

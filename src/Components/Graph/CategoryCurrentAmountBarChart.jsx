// MonthlyBudgetChart.jsx

import React from 'react';
import { useGlobalDataContext } from '../../Contexts/DataContext'
import { useGlobalUserContext } from '../../Contexts/UserContext'
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    PieChart, Pie, Sector, Rectangle,
    ResponsiveContainer,
} from 'recharts'

const CategoryCurrentAmountBarChart = () => {
    const { budget, currentbudget } = useGlobalDataContext()
    const { user } = useGlobalDataContext()
    const data = [{ name: "Monthly Budget", budget, currentbudget }]
    return (
        <ResponsiveContainer width="100%" height="90%">
            <BarChart
                data={data}
            // margin={{
            //     top: 30,
            //     right: 30,
            //     left: 20,
            //     bottom: 5,
            // }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <ReferenceLine y={0} stroke="#000" />
                <Bar dataKey="currentbudget" fill="#9461fd" />
                <Bar dataKey="budget" fill="#2dd9fe" />
                {/* <Bar dataKey="balance" fill="#9461fd" />
                <Bar dataKey="spend" fill="#2dd9fe" /> */}
            </BarChart>
        </ResponsiveContainer>
    );
};
export default CategoryCurrentAmountBarChart;

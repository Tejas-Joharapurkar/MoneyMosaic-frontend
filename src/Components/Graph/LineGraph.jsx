import React from 'react'
import { useGlobalDataContext } from '../../Contexts/DataContext'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const LineGraph = () => {
    const { transaction_history } = useGlobalDataContext()
    console.log(transaction_history);
    const data = transaction_history.reduce((acc, transaction) => {
        const { category, amount, date } = transaction;
        const existingCategoryEntry = acc.find(entry => entry.category === category);
        if (existingCategoryEntry) {
            existingCategoryEntry.transactions.push({ amount, date });
        } else {
            acc.push({ category, transactions: [{ amount, date }] });
        }
        return acc;
    }, []);
    // const data = [
    //     { category: "Food", transactions: [{ day: 1, amount: 100 }, { day: 2, amount: 150 }, { day: 3, amount: 120 }] },
    //     { category: "Bills", transactions: [{ day: 1, amount: 200 }, { day: 2, amount: 180 }, { day: 3, amount: 220 }] },
    //     { category: "Bills", transactions: [{ day: 1, amount: 120 }, { day: 2, amount: 280 }, { day: 3, amount: 320 }] },
    //     // Add more categories and data as needed
    // ];
    const neonColors = ['#FF5161', '#FF53cd', '#2dd9fe', '#9461fd', '#00fe9b', '#ffdb4e', '#fefefe'];
    return (
        <ResponsiveContainer width="100%" height="90%">
            <LineChart data={data[0]?.transactions} margin={{
                top: 30,
                right: 30,
            }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis dataKey="amount" />
                <Tooltip />
                <Legend />
                {data.map((categoryData, index) => (
                    <Line stroke={neonColors[index]} key={index} type="monotone" data={categoryData.transactions} dataKey="amount" name={categoryData.category} />
                ))}
            </LineChart>
        </ResponsiveContainer >
    );
}

export default LineGraph
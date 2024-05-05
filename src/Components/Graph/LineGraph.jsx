import React from 'react'
import { useGlobalDataContext } from '../../Contexts/DataContext'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const LineGraph = () => {
    // const { transaction_history } = useGlobalDataContext()
    // console.log(transaction_history);
    const transaction_history = [
        {
            "category": "Food",
            "amount": 500,
            "desc": "Zomato",
            "date": 1,
            "_id": "1a2b3c4d5e6f7g8h9i0n",
        },
        {
            "category": "Electronics",
            "amount": 200,
            "desc": "Amazon",
            "date": 1,
            "_id": "1a2b3c4d5e6f7g8h9i0o",
        },
        {
            "category": "Bills",
            "amount": 100,
            "desc": "Electricity",
            "date": 1,
            "_id": "1a2b3c4d5e6f7g8h9i0p",
        },
        {
            "category": "Food",
            "amount": 300,
            "desc": "McDonald's",
            "date": 2,
            "_id": "1a2b3c4d5e6f7g8h9i0q",
        },
        {
            "category": "Bills",
            "amount": 150,
            "desc": "Internet",
            "date": 2,
            "_id": "1a2b3c4d5e6f7g8h9i0r",
        },
        {
            "category": "Entertainment",
            "amount": 50,
            "desc": "Movie Tickets",
            "date": 2,
            "_id": "1a2b3c4d5e6f7g8h9i0s",
        },
        {
            "category": "Food",
            "amount": 400,
            "desc": "Pizza Hut",
            "date": 3,
            "_id": "1a2b3c4d5e6f7g8h9i0t",
        },
        {
            "category": "Electronics",
            "amount": 300,
            "desc": "Gadget Store",
            "date": 3,
            "_id": "1a2b3c4d5e6f7g8h9i0u",
        },
        {
            "category": "Others",
            "amount": 200,
            "desc": "Miscellaneous",
            "date": 3,
            "_id": "1a2b3c4d5e6f7g8h9i0v",
        },
        {
            "category": "Food",
            "amount": 600,
            "desc": "Restaurant",
            "date": 4,
            "_id": "1a2b3c4d5e6f7g8h9i0w",
        },
        {
            "category": "Bills",
            "amount": 250,
            "desc": "Water",
            "date": 4,
            "_id": "1a2b3c4d5e6f7g8h9i0x",
        },
        {
            "category": "Electronics",
            "amount": 350,
            "desc": "Online Store",
            "date": 4,
            "_id": "1a2b3c4d5e6f7g8h9i0y",
        },
        // Add more objects as needed
    ];
    const data = transaction_history?.reduce((acc, transaction) => {
        const { category, amount, date } = transaction;
        const existingCategoryEntry = acc.find(entry => entry.category === category);
        if (existingCategoryEntry) {
            existingCategoryEntry.transactions.push({ amount, date });
        } else {
            acc.push({ category, transactions: [{ amount, date }] });
        }
        return acc;
    }, []);
    const neonColors = ['#FF5161', '#FF53cd', '#2dd9fe', '#9461fd', '#00fe9b', '#ffdb4e', '#fefefe'];
    return (
        // <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data[0]?.transactions} margin={{
            top: 30,
        }} width={500} height={200}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis dataKey="amount" />
            <Tooltip />
            <Legend />
            {data.map((categoryData, index) => (
                <Line stroke={neonColors[index]} key={index} type="monotone" data={categoryData.transactions} dataKey="amount" name={categoryData.category} />
            ))}
        </LineChart>
        // </ResponsiveContainer >
    );
}

export default LineGraph
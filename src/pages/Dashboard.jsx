import React, { useState, useEffect, useLayoutEffect } from 'react'
import { useGlobalUserContext } from '../Contexts/UserContext';
import { useGlobalDataContext } from '../Contexts/DataContext';
import BudgetVsExpensesLineChart from '../Components/Graph/BudgetVsExpensesLineChart';
import PieChartComponent from '../Components/Graph/NewPieChart';
import LineGraph from '../Components/Graph/LineGraph';
import './dashboard.css'
const colors = ['#FF5161', '#FF53cd', '#9461fd', '#2dd9fe', '#00fe9b', '#ffdb4e', '#fefefe'];
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
    PieChart, Pie, Sector, Rectangle, LineChart, Line, AreaChart, Area, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
    ResponsiveContainer,
} from 'recharts';
import CategoryCurrentAmountBarChart from '../Components/Graph/CategoryCurrentAmountBarChart';
const dummyData = [
    {
        "day": 1,
        "totalspend": 5000,
        "_id": "1a2b3c4d5e6f7g8h9i0j",
    },
    {
        "day": 2,
        "totalspend": 4800,
        "_id": "1a2b3c4d5e6f7g8h9i0k",
    },
    {
        "day": 3,
        "totalspend": 5500,
        "_id": "1a2b3c4d5e6f7g8h9i0l",
    },
    {
        "day": 4,
        "totalspend": 6200,
        "_id": "1a2b3c4d5e6f7g8h9i0m",
    },
    // Add more objects as needed
];
const dummyExpenseData = [
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
const Dashboard = () => {
    const { user } = useGlobalUserContext();
    const { month, expense: data, transaction_history, spendings } = useGlobalDataContext()
    console.log(spendings);
    return (
        <div className="maingraphContainer">
            <div className="graphContent">
                <SignBarChart data={data} />

            </div>
            <div className="graphContent">
                <PieChartGraph data={data} />

            </div>
            <div className="graphContent">
                <CategoryCurrentAmountBarChart />
            </div>
            <div className="graphContent">
                <LC data={data} />

            </div>
            <div className="graphContent">
                <LineGraph />

            </div>
            <div className="graphContent">
                <BC data={data} />

            </div>
            <div className="graphContent">
                <AC data={data} />
            </div>
            <div className="graphContent">
                <SpendingChart data={dummyData} />
            </div>
        </div>
    )
}

const SpendingChart = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height="100">
            <div>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis dataKey="totalspend" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="totalspend" stroke="#8884d8" activeDot={{ r: 8 }} />
                    {/* <Line type="monotone" dataKey="amount" stroke="#82ca9d" /> */}
                </LineChart>
            </div>
        </ResponsiveContainer>
    )
}


const SignBarChart = ({ data }) => {
    return (
        // <ResponsiveContainer width="100%" height="100%">
        <BarChart
            width={500}
            height={250}
            data={data}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <ReferenceLine y={0} stroke="#000" />
            <Bar dataKey="currentamount" fill="#8884d8" />
            <Bar dataKey="amount" fill="#82ca9d" />
        </BarChart>
        // </ResponsiveContainer>
    );
}
export const PieChartGraph = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <div >
                <PieChart width={500} height={300}>
                    <Pie
                        dataKey="amount"
                        isAnimationActive={false}
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={90}
                        fill="#8884d8"
                        label="category division"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </div>
        </ResponsiveContainer>
    )
}
const BC = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height="100">

            <div>
                <BarChart
                    width={400}
                    height={300}
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="amount" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                    <Bar dataKey="currentamount" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                </BarChart>
            </div>
        </ResponsiveContainer>
    )
}
const LC = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height="100">
            <div>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="currentamount" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="amount" stroke="#82ca9d" />
                </LineChart>
            </div>
        </ResponsiveContainer>
    )
}
const AC = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height="100">

            <div >
                <AreaChart
                    width={500}
                    height={300}
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="currentamount" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="amount" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="diff" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
            </div>
        </ResponsiveContainer >

    )
}
const RC = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height="100">
            <div>
                <BarChart
                    width={400}
                    height={300}
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="currentamount" stackId="a" fill="#8884d8" />
                    <Bar dataKey="amount" stackId="a" fill="#82ca9d" />
                </BarChart>
            </div>
        </ResponsiveContainer >

    )
}

export default Dashboard
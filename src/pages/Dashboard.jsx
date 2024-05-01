import React, { useState, useEffect, useLayoutEffect } from 'react'
import { useGlobalUserContext } from '../Contexts/UserContext';
import { useGlobalDataContext } from '../Contexts/DataContext';
import BudgetVsExpensesLineChart from '../Components/Graph/BudgetVsExpensesLineChart';
import PieChartComponent from '../Components/Graph/NewPieChart';
import LineGraph from '../Components/Graph/LineGraph';
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
import axios from 'axios';

const Dashboard = () => {
    // const [data, setData] = useState([])
    const { user } = useGlobalUserContext();
    const { month, expense: data } = useGlobalDataContext()
    // const url = 'http://localhost:8000/api/v1/expense/get/'
    // useLayoutEffect(() => {
    //     const fetchdata = async () => {
    //         console.log("started");
    //         try {
    //             const response = await axios.get(`${url}${user._id}/${month}`)
    //             let { expenses, budget, currentbudget } = response.data.expense
    //             expenses = expenses.map((item) => {
    //                 return { ...item, "diff": item.amount - item.currentamount }
    //             })
    //             setData((pre) => [...expenses])
    //             const transaction = response.data.transaction
    //             console.log(response.data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     fetchdata()
    // }, [])
    // console.log(data);
    return (
        <div className="maingraphContainer" style={{ height: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '0.8fr 1fr', placeContent: 'center', alignContent: 'center' }}>
            <SignBarChart data={data} />
            <PieChartGraph data={data} />
            <RC data={data} />
            {/* <PieChartComponent /> */}
            <LC data={data} />
            <LineGraph />
            <BC data={data} />
            <AC data={data} />
        </div>
    )
}





const SignBarChart = ({ data }) => {
    return (
        // <ResponsiveContainer width="100%" height="100%">
        <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
            <BarChart
                width={500}
                height={300}
                data={data}
            // margin={{
            //     top: 5,
            //     right: 30,
            //     left: 20,
            //     bottom: 5,
            // }}
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
        </div>
        // </ResponsiveContainer>
    );

}
const PieChartGraph = ({ data }) => {
    return (
        <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
            <PieChart width={400} height={300}>
                <Pie
                    dataKey="amount"
                    isAnimationActive={false}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                    fill="#8884d8"
                    label="category division"
                />
                <Tooltip />
            </PieChart>
        </div>
    )
}
const BC = ({ data }) => {
    return (
        <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
            <BarChart
                width={500}
                height={300}
                data={data}
            // margin={{
            //     top: 5,
            //     right: 30,
            //     left: 20,
            //     bottom: 5,
            // }}
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
    )
}
const LC = ({ data }) => {
    return (
        <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
            <LineChart
                width={500}
                height={300}
                data={data}
            // margin={{
            //     top: 5,
            //     right: 30,
            //     left: 20,
            //     bottom: 5,
            // }}
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
    )
}
const AC = ({ data }) => {
    return (
        <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
            <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
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
    )
}
const RC = ({ data }) => {
    return (
        <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
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
    )
}
export default Dashboard
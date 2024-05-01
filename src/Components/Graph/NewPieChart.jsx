import React, { useMemo, useState } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from 'recharts';
import { useGlobalDataContext } from '../../Contexts/DataContext'
// const data = [
//     { name: 'Group A', value: 400 },
//     { name: 'Group B', value: 300 },
//     { name: 'Group C', value: 300 },
//     { name: 'Group D', value: 200 },
//     { name: 'Group E', value: 280 },
//     { name: 'Group F', value: 240 },
// ];

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.category}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="white">{`${payload.amount}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="white">
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};

const PieChartComponent = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const { expense } = useGlobalDataContext()
    const onPieEnter = (_, index) => {
        setActiveIndex(index);
    };
    const colors = ['#FF5161', '#FF53cd', '#9461fd', '#2dd9fe', '#00fe9b', '#ffdb4e', '#fefefe'];
    return (
        <ResponsiveContainer width="100%" height="100%" >
            {/* <h3># Percentage Distribution</h3> */}
            <PieChart >
                <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={expense}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    fill="#8884d8"
                    dataKey="amount"
                    onMouseEnter={onPieEnter}
                >
                    {expense.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};

// const Accumulated = () => {

//     const ratios = useMemo(() => {
//         let total = 0;
//         data.map((entry) => {
//             total += entry.value
//         })
//         return data.map((i) => {
//             return { name: i.name, per: i.value / total * 100 }
//         })
//     }, [data])
//     return (
//         <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '100%' }}>
//             <PieChartComponent />
//             <div>
//                 {
//                     ratios?.map((i, index) => {
//                         return (
//                             <div key={index}>{i.name} {i.per}</div>
//                         )
//                     })
//                 }
//             </div>
//         </div>
//     )
// }
export default PieChartComponent;

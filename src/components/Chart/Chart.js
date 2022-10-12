import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';





const Chart = ({ smallData }) => {
    const { name, total } = smallData;
    console.log(smallData);


    return (
        <div className='my-10'>
            <h1>Chart Graph</h1>
            <LineChart
                width={400}
                height={200}
                data={smallData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey={total} stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey={name} stroke="#82ca9d" />
            </LineChart>
            <h1>{name}</h1>
            <h1>{total}</h1>
        </div>
    );
};

export default Chart;
import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';





const Chart = ({ data }) => {

    // console.log(data);


    return (
        <div className='my-10 '>
            <h1 className='text-3xl my-10 font-bold'>Chart Graph of total quiz</h1>

           <ResponsiveContainer className='m-auto' height={300} width={500}>
           <BarChart className='m-auto'  data={data}>
                <Bar type="monotone" dataKey="total" fill="#8884d8" />
                <XAxis dataKey='name'></XAxis>
                <YAxis dataKey="total"></YAxis>
                <Tooltip />
                <Legend />
            </BarChart>
           </ResponsiveContainer>
        </div>
    );
};

export default Chart;
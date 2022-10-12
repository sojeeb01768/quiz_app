import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chart from '../Chart/Chart';

const Statistics = () => {
    const allData = useLoaderData();

    const data = allData.data;
    // console.log(data);
    return (
        <div>

            <Chart data={allData.data}></Chart>
        </div>
    );
};

export default Statistics;
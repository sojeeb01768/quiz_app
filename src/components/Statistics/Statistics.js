import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chart from '../Chart/Chart';

const Statistics = () => {
    const allData = useLoaderData();

    console.log(allData.data);
    return (
        <div>

            {
                allData.data.map(smallData => <Chart 
                key={smallData.id}
                smallData={smallData}
                ></Chart> )
            }
        </div>
    );
};

export default Statistics;
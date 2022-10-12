import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chart from '../Chart/Chart';

const Statistics = () => {
    const allData = useLoaderData();

    console.log(allData);
    return (
        <div>

            {
                allData.data.map(data => <Chart
                    key={data.id}
                    data={data}
                ></Chart>)
            }
        </div>
    );
};

export default Statistics;
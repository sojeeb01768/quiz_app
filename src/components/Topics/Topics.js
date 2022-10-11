import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css';

const Topics = () => {
    const topics = useLoaderData();
    console.log(topics.data);
    return (
        <div className='grid grid-cols-1 sm:grid-cols-4 mx-5 '>

            {
                topics.data.map(topic => <Topic
                    key={topic.id}
                    topic={topic}

                ></Topic>)
            }

        </div>
    );
};

export default Topics;
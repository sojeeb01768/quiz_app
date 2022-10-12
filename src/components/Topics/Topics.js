import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css';

const Topics = () => {
    const topics = useLoaderData();
    // console.log(topics.data);
    
    return (
        
        <div >
            <div className='m-auto  my-5 p-5 shadow-lg'>
            <h2 className='text-3xl my-2 font-semibold text-teal-600'>The Best Quiz Maker for Learning & Education</h2>
            <p className='m-auto px-10'>
                Test YourSelf is secure, professional web-based Quiz maker is an easy-to-use, customizable online testing solution for business, training & educational assessments with Tests & Quizzes graded instantly, saving hours of paperwork!
            </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-4 mx-10 shadow-md p-5'>
            {
                topics.data.map(topic => <Topic
                    key={topic.id}
                    topic={topic}

                ></Topic>)
            }

            </div>
        </div>
    );
};

export default Topics;
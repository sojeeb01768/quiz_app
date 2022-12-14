import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css';

const Topics = () => {
    const topics = useLoaderData();
    // console.log(topics.data);

    return (

        <div >
            <div data-aos="zoom-out-up" className='m-auto  my-5 p-5 shadow-lg flex bg-gray-300 mx-5 px-50 rounded-lg'>

                <img className='w-2/6 h-3/6 rounded-lg' src="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/03/24185535/Online-Learning.jpg" alt="" />


                <div>
                    <h2 className='text-3xl my-2 font-semibold text-teal-600'>The Best Quiz Maker for Learning & Education</h2>
                    <p className='m-auto px-10'>
                        Test YourSelf is secure, professional web-based Quiz maker is an easy-to-use, customizable online testing solution for business, training & educational assessments with Tests & Quizzes graded instantly, saving hours of paperwork!
                    </p>
                </div>
            </div>

            <div data-aos="zoom-out-down" className='grid grid-cols-1 sm:grid-cols-4 mx-10 shadow-md p-5'>
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
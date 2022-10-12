import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';

const Topic = ({topic}) => {
    const {id, name, logo} = topic;
    return (
        <div className='border-2 m-2 p-1 rounded-lg'>
            <img className='bg-green-500 rounded-lg' src={logo} alt="" />
            <div className='flex justify-between my-2'>
            <p className='text-blue-500 font-semibold'> {name}</p>
            <p className='bg-blue-700 px-5 text-white rounded-md'><Link to={`/topic/${id}`}>Test</Link></p>
            </div>
        </div>
    );
};

export default Topic;
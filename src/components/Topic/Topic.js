import React from 'react';
import './Topic.css';

const Topic = ({topic}) => {
    const {name, logo} = topic;
    return (
        <div>
            <img src={logo} alt="" />
            <p> {name}</p>
        </div>
    );
};

export default Topic;
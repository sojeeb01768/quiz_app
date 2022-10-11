import React from 'react';

const Options = ({ option }) => {

    return (
        <div className='flex justify-center align-center'>

            <h1 className='border-2  w-1/2 my-2 p-4 rounded-md text-blue-500 font-semibold'>
                <input className='mr-2' type="radio" name="radio" checked></input>
                {option}</h1>
        </div>
    );
};

export default Options;
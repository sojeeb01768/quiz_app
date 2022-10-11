import React from 'react';
import Options from '../Options/Options';

const Question = ({questionSet}) => {
    const {id, name,  options, question, correctAnswer} = questionSet;
// console.log(questionSet);
    return (
        <div className='border-2 shadow-lg shadow-teal-400 mx-10 my-10 p-5 '>
            
            <h2 className='mb-10 text-teal-600 text-xl font-semibold'>{question}</h2>
            {/* <h5>{options}</h5> */}
            {
                options.map(option => <Options
                option={option}
                ></Options>)
            }
        </div>
    );
};

export default Question;
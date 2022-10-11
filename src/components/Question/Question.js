import React from 'react';

const Question = ({questionSet}) => {
    const {id, options, question, correctAnswer} = questionSet;
// console.log(questionSet);
    return (
        <div>
            <h2>{question}</h2>
            <h5>{options}</h5>
        </div>
    );
};

export default Question;
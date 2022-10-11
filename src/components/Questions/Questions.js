import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Questions = () => {
    const questions = useLoaderData();
    const { data } = questions;
    // console.log(questions);
    return (
        <div>
            <h1 className='text-3xl font-bold text-lime-600'>Quiz of: {data.name}</h1>
            {
                data.questions.map(questionSet => <Question
                    key={questionSet.id}
                    questionSet={questionSet}
                ></Question>)
            }
        </div>
    );
};

export default Questions;
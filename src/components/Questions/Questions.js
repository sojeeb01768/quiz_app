import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Questions = () => {
    const questions = useLoaderData();
    const {data} = questions;
    // console.log(questions);
    return (
        <div>
            {
                data.questions.map( questionSet => <Question 
                key={questionSet.id}
                questionSet ={questionSet}
                ></Question>)
            }
        </div>
    );
};

export default Questions;
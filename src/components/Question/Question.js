import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Options from '../Options/Options';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Question = ({ questionSet }) => {

    const answer = () => { toast(correctAnswer) };

    const { options, question, correctAnswer } = questionSet;
    // console.log(questionSet);
    return (
        <div className=' border-2 shadow-lg shadow-teal-400 my-10 m-auto w-4/6 sm:w-4/6  p-5 rounded-lg'>

            <div className='flex justify-center item-center'>
                <h2 className='mb-10 text-teal-600 text-xl font-semibold'>
                    {question}
                </h2>
                <FontAwesomeIcon onClick={answer} className='mt-2 ml-3' icon={faEye}></FontAwesomeIcon>
                <ToastContainer
                    theme="light" position="top-left" autoClose={3000}
                ></ToastContainer>
            </div>


            {
                options.map((option, idx) => <Options
                    key={idx}
                    option={option}
                    correctAnswer={correctAnswer}
                ></Options>)
            }
        </div>
    );
};

export default Question;
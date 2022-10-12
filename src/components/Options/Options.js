import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Options = ({ option, correctAnswer }) => {



    const notify = () => {

        if (option === correctAnswer) {

            toast('Correct Answer')
        }
        else {
            toast('Incorrect Answer')
        }
    }

    return (
        <div className='flex justify-center align-center'>

            <h1 className='border-2  w-4/6  my-2 p-4 rounded-md text-blue-500 font-semibold'>

                <label className='mr-2 '>
                    <input onClick={notify} type="radio" name="radio" />
                    
                </label>

                {option}</h1>

            <ToastContainer
                theme="dark" position="top-left" autoClose={3000} />
        </div>
    );
};

export default Options;
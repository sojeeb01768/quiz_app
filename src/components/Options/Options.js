import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Options = ({option}) => {
    

    const notify= () =>{
        toast('Correct Answer')
    }

    return (
        <div className='flex justify-center align-center'>

            <h1 className='border-2  w-1/2 my-2 p-4 rounded-md text-blue-500 font-semibold'>

                <label className='mr-2 '>
                    <input onClick={notify} type="radio" name="radio" />
                        <span class="check"></span>
                </label>

                {option}</h1>
            
                <ToastContainer/>
        </div>
    );
};

export default Options;
import React from 'react';

const Blog = () => {
    return (
        <div className='w-4/6 m-auto shadow-lg shadow-green-300 py-5'>
            <h1 className='my-10 text-4xl font-bold text-fuchsia-700'>FAQ</h1>
            <div data-aos="zoom-out-up" className='border m-5 p-3 '>
                <h2 className='font-semibold text-xl'>1. what is the purpose of react router?</h2> <br />
                <p><span className='font-semibold'>Answer:</span> React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information. <br />

                    By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.</p>
            </div>


            <div data-aos="zoom-out-down" className='border m-5 p-3 '>
                <h2 className='font-semibold text-xl'>2. How does context api works?</h2> <br />
                <p><span className='font-semibold'>Answer:</span> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.  <br />

                    React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
            </div>
            <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className='border m-5 p-3 '>
                <h2 className='font-semibold text-xl'>3. what is useRef?</h2> <br />
                <p><span className='font-semibold'>Answer:</span> The useRef hook is a built-in React hook that takes one argument or parameter as its initial value and returns a reference. The reference has an interesting and useful property called current. <br />

                    One of the most useful features of the useRef hook is that the data or value in a reference or ref remains the same, even after component re-rendering. Also, if you update a reference, it does not affect the rendering of the app, unlike states.</p>
            </div>


        </div>
    );
};

export default Blog;
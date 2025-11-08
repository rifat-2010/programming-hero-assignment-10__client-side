import React from 'react';
import error_img from '../assets/error-404.png'
import { NavLink } from 'react-router';
const ErrorPage = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            {/* page title */}
            <title>Error-Page😢</title>
            <div>
                <img src={error_img} alt="" />
                <div className='flex flex-col gap-4 justify-center items-center'>
                    <h1 className='text-[48px] font-bold text-center'>Oops, page not found!</h1>
                    <p className='text-xl font-normal text-gray-700 text-center' >The page you are looking for is not available.</p>
                    <NavLink to={'/'} className='w-[150px] h-12 flex justify-center items-center gap-2.5 py-3 px-4 rounded-sm bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white font-bold cursor-pointer'>Go Back!</NavLink>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
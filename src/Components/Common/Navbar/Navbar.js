import React from 'react';
import { SiPlayerdotme } from 'react-icons/si';
import { FaOpencart } from 'react-icons/fa';


const Navbar = () => {
    return (
        <div>
            {/* 1st bar start */}
            <div className='border-b-gray-200 border pb-2 text-sm'>
                <div className='flex justify-evenly mx-28 pt-3'>
                    <div className='w-1/2'>
                        <ul className='flex gap-6'>
                            <li>Pick Fast App</li>
                            <li>Track My Order</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    <div className='w-1/2'>
                        <ul className='flex justify-end gap-6'>
                            <li>Notification</li>
                            <li className='font-bold'>Sign Up</li>
                            <li className='font-bold'>Login</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* 1st bar end */}

            {/* 2nc bar start */}
            <div className='flex items-center'>
                <div className='flex justify-center items-end pt-3 w-1/4'>
                    <div className='flex items-end'>
                        <h1 className='font-bold text-5xl text-[#F84B2F]'><SiPlayerdotme /> </h1>
                     <h3 className='pr-2'>Pick</h3>
                    </div>
                    <div>
                        <h3>Fast</h3>
                    </div>
                </div>
                <div className='w-1/2 mt-10  rounded-sm'>
                    <input className='w-10/12 border border-gray-200 py-2 pl-4 outline-none' type="search" name="search" id="" />
                    <button className='py-2 px-8 text-center font-semibold bg-[#F84B2F] text-white' type="submit">Search</button>
                </div>
                <div className='flex justify-start text-4xl pl-10 text-[#F84B2F] w-1/4 mt-10'>
                    <FaOpencart/>
                </div>
            </div>
            {/* 2nd bar end */}
            <div></div>
        </div>
    );
};

export default Navbar;  
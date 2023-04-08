import React from 'react';
import { SiPlayerdotme } from 'react-icons/si';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import { MdOutlineNotifications } from 'react-icons/md';


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
                            <li className='flex items-center'>
                                <MdOutlineNotifications/>
                                Notification
                            </li>
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
                    <input className='w-10/12 border bg-gray-100 border-gray-200 py-2 pl-4 outline-none' type="search" name="search" id="" placeholder='Search in Pick Fast' />
                    <button className='py-2 px-8 text-center font-semibold bg-[#F84B2F] text-white' type="submit">Search</button>
                </div>
                <div className='flex justify-start  pl-10 gap-16  w-1/4 mt-10'>
                    <h2 className='text-3xl text-[#F84B2F]'><AiOutlineShoppingCart /></h2>
                    <Link className='bg-[#F84B2F] py-2 px-6 rounded-md text-gray-100 font-semibold' to='/'>Become a Seller</Link>
                </div>
            </div>
            {/* 2nd bar end */}
            <div>
                <Menu />
            </div>
        </div>
    );
};

export default Navbar;  
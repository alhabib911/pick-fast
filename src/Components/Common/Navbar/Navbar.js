import React from 'react';
import { SiPlayerdotme } from 'react-icons/si';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { HiOutlineSearch } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { MdOutlineNotifications } from 'react-icons/md';


const Navbar = () => {
    return (
        <div className='bg-white pb-6'>
            {/* 1st bar start */}
            <div className='lg:border-b-gray-200 lg:border md:border-b-gray-200 md:border pb-2 text-sm'>
                <div className='lg:flex md:flex hidden justify-evenly lg:mx-28 md:mx-10 mx-4 lg:pt-3 md:pt-3'>
                    <div className='w-1/2 '>
                        <ul className='flex gap-6'>
                            <li>Pick Fast App</li>
                            <li>Track My Order</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    <div className='w-1/2'>
                        <ul className='flex justify-end gap-6'>
                            <li className='flex items-center'>
                                <MdOutlineNotifications />
                                Notification
                            </li>
                            <li className='font-bold'>Sign Up/ Login</li>

                        </ul>
                    </div>
                </div>
            </div>
            {/* 1st bar end */}

            {/* 2nc bar start */}
            <div className='flex lg:items-center lg:justify-center justify-start md:pt-5'>
                <div className='lg:flex md:flex hidden lg:justify-center md:justify-start items-end lg:pt-10 w-1/4 font-semibold lg:pl-16 md:pl-16 pl-5'>
                    <div className='lg:flex md:flex lg:items-end'>
                        <h1 className='font-bold lg:text-4xl md:text-lg lg:flex md:flex hidden text-[#F84B2F]'><SiPlayerdotme /> </h1>
                        <h3 className='pr-2 lg:text-3xl md:text-base lg:flex md:flex hidden'>Pick</h3>
                    </div>
                    <div>
                        <h3 className='lg:text-3xl md:text-base lg:flex md:flex hidden'>Fast</h3>
                    </div>
                </div>
                <div className='lg:w-1/2 md:w-1/2 w-full lg:mx-0 md:mx-0 mx-2 lg:mt-10 lg:pl-2 md:pl-2 rounded-sm flex'>
                    <input className='w-11/12  border bg-gray-100 border-gray-200 lg:py-3 py-0 pl-4 outline-none' type="search" name="search" id="" placeholder='Search in Pick Fast' />
                    <button className='lg:py-3 md:py-3 py-2 px-4 text-center text-xl font-semibold bg-[#F84B2F] text-white' type="submit"><HiOutlineSearch /></button>
                </div>
                <div className='lg:flex md:flex hidden lg:justify-start md:justify-center  pl-10 gap-16  w-1/4 lg:mt-10'>
                    <h2 className='text-3xl text-[#F84B2F]'><AiOutlineShoppingCart /></h2>
                    {/* <Link className='bg-[#F84B2F] py-2 px-6 rounded-md text-gray-100 font-semibold' to='/'>Become a Seller</Link> */}
                </div>
            </div>
            {/* 2nd bar end */}
            <div>
                <div className='lg:mx-28 lg:flex md:flex hidden pt-2 bg-white w-[230px] absolute'>
                    <ul>
                        <li className='py-1 hover:bg-gray-100 mt-5 pl-4 text-sm text-gray-600'>Women's & Girls' Fashion</li>
                        <li className='py-1 hover:bg-gray-100 pl-4 text-sm text-gray-600'>Health & Beauty</li>
                        <li className='py-1 hover:bg-gray-100 pl-4 text-sm text-gray-600'>Watches, Bags, Jewellery</li>
                        <li className='py-1 hover:bg-gray-100 pl-4 text-sm text-gray-600'>Men's & Boys' Fashion</li>
                        <li className='py-1 hover:bg-gray-100 pl-4 text-sm text-gray-600'>Babies & Toys</li>
                        <li className='py-1 hover:bg-gray-100 pl-4 text-sm text-gray-600'>Electronics Devices</li>
                        <li className='py-1 hover:bg-gray-100 pl-4 text-sm text-gray-600'>TV & Home Appliances</li>
                        <li className='py-1 hover:bg-gray-100 pl-4 text-sm text-gray-600'>Groceries & Pets</li>
                        <li className='py-1 hover:bg-gray-100 pl-4 text-sm text-gray-600 pb-1'>Home & Lifestyle</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;  
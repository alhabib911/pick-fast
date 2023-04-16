import React from 'react';
import { SiPlayerdotme } from 'react-icons/si';
import { HiOutlineSearch } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { IoMdCart } from 'react-icons/io';
import { ImUser } from 'react-icons/im';
import './Profile.css'


const Navbar = () => {
    return (
        <div className='bg-white pb-6'>
            {/* 1st bar start */}
            <div className='lg:border-b-gray-200 lg:border md:border-b-gray-200 md:border pb-2 text-sm'>
                <div className='lg:flex md:flex hidden justify-evenly lg:mx-28 md:mx-10 mx-4 lg:pt-3 md:pt-3'>
                    <div className='w-1/2 '>
                        <ul className='flex gap-6'>
                            <Link to='/'><li>Pick Fast App</li></Link>
                            <Link to='/tracking-order'><li>Track My Order</li></Link>
                            <Link to='/'><li>Support</li></Link>
                        </ul>
                    </div>
                    <div className='w-1/2'>
                        <ul className='flex justify-end gap-6'>
                            {/* <Notification /> */}
                            <Link to='/'><li>About Pick Fast</li></Link>
                            <Link to='/log-in'>
                                <li className='font-bold'>Sign Up/ Login</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
            {/* 1st bar end */}

            {/* 2nc bar start */}
            <div className='flex lg:items-center lg:justify-center justify-start md:pt-5'>
                <Link to='/'>
                    <div className='lg:flex md:flex hidden justify-center  items-center lg:pt-10 md:pt-2 lg:w-1/4 font-semibold lg:pl-16 md:pl-16 pl-5'>
                        <div className='lg:flex md:flex lg:items-end'>
                            <h1 className='font-bold lg:text-4xl md:text-lg lg:flex md:flex hidden text-[#F84B2F]'><SiPlayerdotme /> </h1>
                            <h3 className='pr-2 lg:text-3xl md:text-base lg:flex md:flex hidden'>Pick</h3>
                        </div>
                        <div>
                            <h3 className='lg:text-3xl md:text-base lg:flex md:flex hidden'>Fast</h3>
                        </div>
                    </div>
                </Link>
                <div className='lg:w-1/2 md:w-1/2 w-full lg:mx-0 md:mx-0 mx-2 lg:mt-10 lg:pl-2 md:pl-2 rounded-sm flex'>
                    <input className='lg:w-11/12 md:w-10/12 w-11/12  border bg-gray-100 border-gray-200 lg:py-3 py-0 pl-4 outline-none' type="search" name="search" id="" placeholder='Search in Pick Fast' />
                    <button className='lg:py-3 md:py-3 py-2 px-4 text-center text-xl font-semibold bg-[#F84B2F] text-white' type="submit"><HiOutlineSearch /></button>
                </div>
                <div className='lg:flex md:flex hidden lg:justify-center md:justify-between items-center lg:pr-0 md:pr-0 pr-2 lg:gap-8 md:gap-5 gap-3 lg:w-1/4 md:w-1/4 w-1/6'>
                    <div className='lg:flex md:flex hidden'>
                        <h2 className='absolute bg-[#F84B2F] text-white font-semibold py-[5px] px-[7px] border rounded-e-full rounded-s-full ml-4 mb-2 text-[10px] lg:mt-6'>03</h2>
                        <Link className='text-2xl lg:mt-10 md:mt-2' to='/cart'><IoMdCart /></Link>
                    </div>
                    <div className='lg:flex md:flex hidden'>
                        <div class="dropdown">
                            <button class="dropbtn lg:mt-10 md:mt-2"><span className='text-2xl'><ImUser /></span></button>
                            <div class="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>
                        {/* <Link className='' to='/cart'></Link> */}
                    </div>
                    <div>
                        <Link className='lg:flex md:flex hidden lg:bg-[#F84B2F] lg:py-2 lg:mt-10 md:mt-2 lg:px-6 px-2 whitespace-nowrap rounded-md lg:text-gray-100 md:text-[#F84B2F] font-semibold' to='/become-seller'>Become a Seller</Link>
                    </div>
                </div>
            </div>
            {/* 2nd bar end */}
        </div>
    );
};

export default Navbar;  
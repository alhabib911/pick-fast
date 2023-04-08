import React from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';
import FreeDelivery from '../../../Asset/BodyOne/Navbar/FreeDelivery.png'

const Menu = () => {
    return (
        <div className='bg-[#F84B2F] mt-5'>
            <div className='mx-28 pt-5 flex'>
                <div className='flex justify-center items-center gap-14 pb-5 text-gray-800 bg-white w-1/5'>
                    <div className='flex items-center gap-2 pt-2'>
                        <AiOutlineMenuUnfold />
                        <span className='font-bold '>All Category</span>
                    </div>
                    <div className='pt-2'>
                        <MdKeyboardArrowDown />
                    </div>
                </div>
                <div className='w-3/5 flex justify-center'>
                    <ul className='flex gap-10 font-semibold text-gray-100 pt-1'>
                        <li className='flex items-center gap-2'>
                            Homepage
                            <MdKeyboardArrowDown />
                        </li>
                        <li className='flex items-center gap-2'>
                            Shop
                            <MdKeyboardArrowDown />
                        </li>

                        <li className='flex items-center gap-2'>
                            Page
                            <MdKeyboardArrowDown />
                        </li>
                        <li className='flex items-center'>About</li>
                        <li className='flex items-center'>Blog</li>
                        <li className='flex items-center'>Contact</li>
                    </ul>
                </div>
                <div className='flex items-center '>
                    <Link className='flex justify-end' to='/'>
                        <img className='w-3/5' src={FreeDelivery} alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Menu;
import React from 'react';
import { BiCategory } from 'react-icons/bi';
import { ImUser } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { IoMdCart } from 'react-icons/io';

const NavbarFooter = () => {
    return (
        <div className='lg:hidden md:hidden fixed bottom-0 border-gray-200 border-t-2 left-0 w-full bg-white pt-2'>
            <div className='flex justify-between mx-6 py-1'>
                
                <div><Link to='/'>
                    <span className='flex justify-center text-xl bg-white'><AiFillHome /></span>
                    <span>Home</span>
                </Link></div>
                <div><Link to='/'>
                    <span className='flex justify-center text-xl bg-white'><BiCategory /></span>
                    <span>Category  </span>
                </Link></div>
                <div><Link to='/'>
                    <span className='flex justify-center text-xl bg-white'><IoMdCart /></span>
                    <span>Cart</span>
                </Link></div>
                <div><Link to='/'>
                    <span className='flex justify-center text-xl bg-white'><ImUser /></span>
                    <span>Account</span>
                </Link></div>
            </div>
        </div>
    );
};

export default NavbarFooter;



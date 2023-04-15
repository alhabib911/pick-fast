import React from 'react';
import NavbarFooter from '../../Common/NavbarFooter/NavbarFooter';
import Navbar from '../../Common/Navbar/Navbar';
import Footer from '../../Common/Footer/Footer';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AiFillApple } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';

const SignUp = () => {
    return (
        <div>
            <NavbarFooter/>
            <Navbar/>
            <div className=' flex justify-center'>
                    <div className='lg:w-2/6 md:w-3/4 w-full bg-white shadow-md border-t-4 border-[#F84B2F] rounded lg:py-8 md:py-6 py-3 my-5'>
                        <h2 className='lg:text-xl text-lg mx-10 font-semibold'>Welcome to Pick Fast! Please Sign Up</h2>
                        <form className='mx-10 pt-10' action="">
                            <div className='flex gap-2 pb-6'>
                            <input className='w-1/2 py-3 outline-none border pl-4 text-sm' placeholder='First Name' type="text" name="email" id="" /> <br /> <br />
                            <input className='w-1/2 py-3 outline-none border pl-4 text-sm' placeholder='Last Name' type="text" name="email" id="" /> <br /> <br />
                            </div>
                            <input className='w-full py-3 outline-none border pl-4 text-sm' placeholder='Phone Number / Email' type="email" name="email" id="" /> <br /> <br />
                            <input className='w-full py-3 outline-none border pl-4 text-sm' placeholder='Password' type="password" name="password" id="" /> <br /> <br />
                            <input className='w-full py-3 outline-none border pl-4 text-sm' placeholder='Confirm Password' type="password" name="password" id="" />
                            <br />
                            <input className='w-full cursor-pointer flex justify-center py-3 mt-6 bg-[#F84B2F] text-sm text-white' type="submit" value="LOG IN" />
                        </form>
                        <div className='mx-10 pt-6 text-blue-500 text-sm'>
                            <Link to='/'>Forget Password</Link>
                        </div>
                        <div className='flex items-center justify-center gap-3 pt-4'>
                            <div className='w-1/4'><hr /></div>
                            <div className='font-semibold text-gray-500'>OR</div>
                            <div className='w-1/4'><hr /></div>
                        </div>
                        <div className='flex items-center justify-center gap-3 mx-5 pt-6'>
                            <button className='flex items-center gap-1 lg:text-lg md:text-base text-sm border border-gray-200 px-6 py-2 bg-white shadow-sm'><div><BsFacebook /></div>
                                <div>Facebook</div></button>
                            <button className='flex items-center gap-1 lg:text-lg md:text-base text-sm border border-gray-200 px-6 py-2 bg-white shadow-sm'>
                                <div><FcGoogle /></div>
                                <div>Facebook</div>
                            </button>
                            <button className='flex items-center gap-1 lg:text-lg md:text-base text-sm border border-gray-200 px-6 py-2 bg-white shadow-sm'>
                                <div><AiFillApple /></div>
                                <div>Apple</div>
                            </button>
                        </div>

                        <div className='flex justify-center pt-8'>
                            <h3>New to Pick Fast? <Link className='text-[#F84B2F] font-semibold' to='/log-in'>Log In</Link></h3>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    );
};

export default SignUp;
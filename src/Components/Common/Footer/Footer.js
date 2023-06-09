import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SiPlayerdotme } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-white'>
            <div className='lg:border md:border lg:border-b-[#F84B2F] md:border-b-[#F84B2F] border-0'>
                <div className='lg:mx-20 md:mx-5 mx-2 lg:pt-12 md:pt-5 pt-2 lg:pb-16 md:pb-12 pb-10 lg:grid md:grid lg:grid-cols-4 md:grid-cols-2 hidden lg:gap-8 md:gap-5 gap-2'>
                    <div className='w-full'>
                        <h3 className='font-semibold py-2'>About Us</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt nihil aspernatur omnis possimus laborum necessitatibus!</p>
                    </div>
                    <div className='w-full'>
                        <h3 className='font-semibold py-2'>Discover</h3>
                        <div>
                            <ul className='grid grid-cols-2 gap-2 whitespace-nowrap'>
                                <Link to='/'><li>Home</li></Link>
                                <Link to='/'><li>Terms & condition</li></Link>
                                <Link to='/'><li>Payment & Return</li></Link>
                                <Link to='/'><li>Support</li></Link>
                                <Link to='/'><li>Blog</li></Link>
                                <Link to='/'><li>Contact</li></Link>
                            </ul>
                        </div>
                    </div>
                    <div className='w-full'>
                        <h3 className='font-semibold py-2'>Need Help</h3>
                        <p>We are Always here for you! Knock us on Messenger anytime or Call our Hotline (10AM - 10PM).</p>
                    </div>
                    <div className='w-full'>
                        <div>
                            <h3 className='font-semibold py-2'>Contact</h3>
                            <p>info@domain-name.com</p>
                            <p>+880123456789</p>
                        </div>
                        <div className='text-4xl flex pt-3'>
                            <div className='text-blue-600'>
                                <Link to='/'><AiFillFacebook /></Link>
                            </div>
                            <div className='text-pink-400'>
                                <Link to='/'><AiFillInstagram /></Link>
                            </div>
                            <div className='text-blue-600'>
                                <Link to='/'><AiFillLinkedin /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:mx-20 mx-2 pb-8 lg:flex md:flex hidden items-end justify-between pt-3'>
                <Link to='/'>
                    <div className='lg:flex md:flex hidden lg:justify-center md:justify-start items-start lg:pt-10 w-1/4 font-semibold lg:pl-16 md:pl-0 pl-5'>
                        <div className='lg:flex md:flex lg:items-end'>
                            <h1 className='font-bold lg:text-4xl md:text-lg lg:flex md:flex hidden text-[#F84B2F]'><SiPlayerdotme /> </h1>
                            <h3 className='pr-2 lg:text-3xl md:text-base lg:flex md:flex hidden'>Pick</h3>
                        </div>
                        <div>
                            <h3 className='lg:text-3xl md:text-base lg:flex md:flex hidden'>Fast</h3>
                        </div>
                    </div>
                </Link>
                <div>
                    <p>© Copyright Pick Fast Ltd.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
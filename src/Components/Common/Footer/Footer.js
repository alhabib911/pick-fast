import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SiPlayerdotme } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-white'>
            <div className='border border-b-[#F84B2F]'>
                <div className='mx-20 pt-12 pb-16 flex gap-8'>
                    <div className='w-1/4'>
                        <h3 className='font-semibold py-2'>About Us</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt nihil aspernatur omnis possimus laborum necessitatibus!</p>
                    </div>
                    <div className='w-1/4'>
                        <h3 className='font-semibold py-2'>Discover</h3>
                        <div>
                            <ul className='grid grid-cols-2 gap-2'>
                                <Link to='/'><li>Home</li></Link>
                                <Link to='/'><li>Terms & condition</li></Link>
                                <Link to='/'><li>Payment & Return</li></Link>
                                <Link to='/'><li>Support</li></Link>
                                <Link to='/'><li>Blog</li></Link>
                                <Link to='/'><li>Contact</li></Link>
                            </ul>
                        </div>
                    </div>
                    <div className='w-1/4'>
                        <h3 className='font-semibold py-2'>Need Help</h3>
                        <p>We are Always here for you! Knock us on Messenger anytime or Call our Hotline (10AM - 10PM).</p>
                    </div>
                    <div className='w-1/4'>
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
            <div className='mx-20 pb-8 flex items-end justify-between'>
            <div className='flex justify-start items-end pt-10 w-1/4 font-semibold'>
                    <div className='flex items-end'>
                        <h1 className='font-bold text-4xl text-[#F84B2F]'><SiPlayerdotme /> </h1>
                        <h3 className='pr-2 text-3xl'>Pick</h3>
                    </div>
                    <div>
                        <h3 className='text-3xl'>Fast</h3>
                    </div>
                </div>
                <div>
                    <p>© Copyright Pick Fast Ltd.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
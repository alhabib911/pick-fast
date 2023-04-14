import React from 'react';
import NavbarFooter from '../../Common/NavbarFooter/NavbarFooter';
import Navbar from '../../Common/Navbar/Navbar';
import Footer from '../../Common/Footer/Footer';
import { CiDeliveryTruck } from 'react-icons/ci';

const TrackingOrder = () => {
    return (
        <div>
            <NavbarFooter />
            <Navbar />
            <div>
                <h2 className='text-center py-10 text-3xl font-semibold'>Track Order</h2>
                <div className='lg:mx-28 md:mx-10 mx-3'>
                    <h3 className='lg:text-xl text-lg font-semibold'>Track Your Order</h3>
                    <p>Enter your order taracking number and your secreet id.</p>
                </div>
                <div className='lg:flex md:flex justify-between items-center lg:mx-28 md:mx-10 mx-3 bg-white lg:px-20 md:px-8 px-4 py-16 mt-3 mb-10'>
                    <div className='lg:w-3/4 md:w-3/4 w-full'>
                        <form>
                            <label className='text-sm' htmlFor="">Your Email Address*</label> <br />
                            <input className='lg:w-9/12 md:w-11/12 w-full py-3 border-2 text-sm pl-3 bg-gray-100 outline-none' type="email" name="email" id="" /> <br /> <br />
                            <label className='text-sm' htmlFor="">Your order number*</label> <br />
                            <input className='lg:w-9/12 md:w-11/12 w-full py-3 border-2 text-sm pl-3 bg-gray-100 outline-none' type="text" name="order-number" id="" /> <br />
                            <div className='pt-8'>
                                <button className='bg-[#F84B2F] px-10 py-4 text-sm font-semibold text-white hover:text-[#F84B2F] hover:bg-white hover:border hover:border-[#F84B2F]' type="submit">Track Now</button>
                            </div>
                        </form>
                    </div>
                    <div className='lg:text-[250px] md:text-9xl lg:flex md:flex hidden text-[#F84B2F]'>
                        <CiDeliveryTruck />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TrackingOrder;
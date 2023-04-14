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
                <div className='mx-28'>
                    <h3 className='text-xl font-semibold'>Track Your Order</h3>
                    <p>Enter your order taracking number and your secreet id.</p>
                </div>
                <div className='flex justify-between mx-28 bg-white px-20 py-16 mt-3 mb-10'>
                    <div className='w-3/4'>
                        <form>
                            <label className='text-sm' htmlFor="">Your Email Address*</label> <br />
                            <input className='w-9/12 py-3 border-2 text-sm pl-3 bg-gray-100 outline-none' type="email" name="email" id="" /> <br /> <br />
                            <label className='text-sm' htmlFor="">Your order number*</label> <br />
                            <input className='w-9/12 py-3 border-2 text-sm pl-3 bg-gray-100 outline-none' type="text" name="order-number" id="" /> <br />
                            <div className='pt-8'>
                                <button className='bg-[#F84B2F] px-10 py-4 text-sm font-semibold text-white hover:text-[#F84B2F] hover:bg-white hover:border hover:border-[#F84B2F]' type="submit">Track Now</button>
                            </div>
                        </form>
                    </div>
                    <div className='text-[250px] text-[#F84B2F]'>
                        <CiDeliveryTruck />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TrackingOrder;
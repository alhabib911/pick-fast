import React from 'react';
import { TbReportMoney, TbTruckDelivery, TbTruckReturn } from 'react-icons/tb';
import { SiQualcomm } from 'react-icons/si';


const PolicyMenu = () => {
    return (
        <div className='lg:mx-28 md:mx-6 lg:pt-16 md:pt-16 pt-2 lg:grid md:grid hidden lg:grid-cols-4 md:grid-cols-2  lg:gap-5 gap-1'>
            <div className='flex lg:justify-center md:justify-center justify-start lg:pl-0 md:pl-0 pl-24 py-4 rounded-md border border-gray-100 gap-2 bg-white'>
                <div className='text-5xl text-[#F84B2F]'>
                    <TbTruckDelivery />
                </div>
                <div>
                    <h3 className='font-semibold'>Free Shipping</h3>
                    <h3 className='text-sm'>When ordering over $100</h3>
                </div>
            </div>
            <div className='flex lg:justify-center md:justify-center justify-start lg:pl-0 md:pl-0 pl-24 py-4 rounded-md border border-gray-100 gap-2 bg-white'>
                <div className='text-5xl text-[#F84B2F]'>
                    <TbTruckReturn />
                </div>
                <div>
                    <h3 className='font-semibold'>Free Return</h3>
                    <h3 className='text-sm'>7 Days return policy</h3>
                </div>
            </div>
            <div className='flex lg:justify-center md:justify-center justify-start lg:pl-0 md:pl-0 pl-24 py-4 rounded-md border border-gray-100 gap-2 bg-white'>
                <div className='text-4xl text-[#F84B2F]'>
                    <SiQualcomm />
                </div>
                <div>
                    <h3 className='font-semibold'>Quality Product</h3>
                    <h3 className='text-sm'>100+ Brand shop product</h3>
                </div>
            </div>
            <div className='flex lg:justify-center md:justify-center justify-start lg:pl-0 md:pl-0 pl-24 py-4 rounded-md border border-gray-100 gap-2 bg-white'>
                <div className='text-5xl text-[#F84B2F]'>
                    <TbReportMoney />
                </div>
                <div>
                    <h3 className='font-semibold'>Money Back Guarantee</h3>
                    <h3 className='text-sm'>15 days money back Guarantee</h3>
                </div>
            </div>
            
        </div>
    );
};

export default PolicyMenu;
import React from 'react';
import { MdKeyboardArrowRight, MdVerifiedUser } from 'react-icons/md';
import { BsArrowCounterclockwise } from 'react-icons/bs';
import { CiDeliveryTruck } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import PickMallSlider from './PickMallSlider';
import PickBrand from './PickBrand';

const PickMall = () => {
    return (
        <div className='bg-white lg:mx-20 mt-8 pt-5 whitespace-nowrap lg:flex lg:flex-col md:flex md:flex-col hidden'>
            <div className='lg:px-10 md:px-3 px-2 flex justify-between border-b-gray-100 border-b pb-2 mb-5'>
                <div className='flex gap-10'>
                    <div className='text-[#F84B2F] font-semibold lg:text-lg md:text-xs'>PICK MALL</div>
                    <div className='flex items-center gap-1 lg:text-lg md:text-xs font-semibold'><span className='text-[#F84B2F]'><BsArrowCounterclockwise/></span> 15 Days Return*</div>
                    <div className='flex items-center gap-1 lg:text-lg md:text-xs font-semibold'> <span className='text-[#F84B2F]'><MdVerifiedUser/></span> 100% Authentic</div>
                    <div className='flex items-center gap-1 lg:text-lg md:text-xs font-semibold'> <span className='text-[#F84B2F]'><CiDeliveryTruck/></span> Free Shopping</div>
                </div>
                <div>
                    <Link className='flex items-center text-[#F84B2F] lg:text-sm md:text-xs font-bold' to='/'>See More <MdKeyboardArrowRight/></Link>
                </div>
            </div>
            <div className='flex pt-5 mx-10'>
                <div className='lg:w-2/6 md:w-1/4'>
                    <PickMallSlider/>
                </div>
                <div className='lg:w-2/3 md:w-3/4'>
                    <PickBrand/>
                </div>
            </div>
        </div>
    );
};

export default PickMall;
import React from 'react';
import { MdKeyboardArrowRight, MdVerifiedUser } from 'react-icons/md';
import { BsArrowCounterclockwise } from 'react-icons/bs';
import { CiDeliveryTruck } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import PickMallSlider from './PickMallSlider';
import PickBrand from './PickBrand';

const PickMall = () => {
    return (
        <div className='bg-white mx-20 mt-8 pt-5'>
            <div className='px-10 flex justify-between border-b-gray-100 border-b pb-2 mb-5'>
                <div className='flex gap-10'>
                    <div className='text-[#F84B2F] font-semibold text-lg'>PICK MALL</div>
                    <div className='flex items-center gap-1 text-base font-semibold'><span className='text-[#F84B2F]'><BsArrowCounterclockwise/></span> 15 Days Return*</div>
                    <div className='flex items-center gap-1 text-base font-semibold'> <span className='text-[#F84B2F]'><MdVerifiedUser/></span> 100% Authentic</div>
                    <div className='flex items-center gap-1 text-base font-semibold'> <span className='text-[#F84B2F]'><CiDeliveryTruck/></span> Free Shopping</div>
                </div>
                <div>
                    <Link className='flex items-center text-[#F84B2F] text-sm font-bold' to='/'>See More <MdKeyboardArrowRight/></Link>
                </div>
            </div>
            <div className='flex pt-5 mx-10'>
                <div className='w-2/6'>
                    <PickMallSlider/>
                </div>
                <div className='w-2/3'>
                    <PickBrand/>
                </div>
            </div>
        </div>
    );
};

export default PickMall;
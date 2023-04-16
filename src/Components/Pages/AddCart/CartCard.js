import React from 'react';
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const CartCard = (props) => {
    const { id, name, image, price, offer, oldPrice } = props.product
    return (
        <div className='flex items-center justify-between py-5 border-b-gray-200 shadow-md px-6'>
            <div className='flex items-center lg:gap-5 md:gap-3 gap-2'>
                <input className='w-4 h-7' type="checkbox" name="select-all" id="" />
                <img className='lg:w-20 md:w-16 w-12 border' src={image} alt="" />
                <h2 className='lg:w-3/4 w-1/2 lg:text-sm md:text-sm text-xs'>{name.slice(0, 60)}...</h2>
            </div>
            <div className='lg:pr-0 md:pr-0 pr-3'>
                <h3 className='lg:text-xl text-base text-[#F84B2F]'>${price}</h3>
                <s className='text-gray-500'>{oldPrice}</s>
                <h4>-{offer}%</h4>
                <div className='text-lg pt-2'>
                    <button className='text-[#F84B2F]'><AiOutlineDelete /></button>
                </div>
            </div>
            <div className='flex lg:gap-3 md:gap-3 gap-1 lg:text-lg md:text-lg text-sm text-gray-500'>
                <button className='bg-gray-100 px-2'><AiOutlineMinus/></button>
                <h2>2</h2>
                <button className='bg-gray-100 px-2'><AiOutlinePlus/></button>
            </div>
        </div>
    );
};

export default CartCard;
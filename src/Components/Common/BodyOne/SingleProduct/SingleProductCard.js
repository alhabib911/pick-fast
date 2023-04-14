import React from 'react';
import { Link } from 'react-router-dom';

const SingleProductCard = (props) => {
    const { name, image, price, offer, sell } = props.product
    return (
        <div className='shadow-md hover:border-[#F84B2F] rounded-b-md hover:border hover:rounded-md'>
            <Link to='/'>
                <img className='rounded shadow-sm' src={image} alt="" />
                <div className='px-3 bg-gray-50'>
                    <h3 className='text-xs h-12 pb-4 pt-1'>{name.slice(0, 50)}...</h3>
                    <h4 className='text-green-500 text-xs font-semibold lg:pt-0 md:pt-2 pt-0'>{offer}% off</h4>
                    <div className='flex items-center justify-around lg:py-4 md:py-2 py-0'>
                        <h4 className='text-2xl font-semibold text-[#F84B2F] '>${price}</h4>
                        <h4 className=' text-xs text-gray-700 py-1 px-4 '>{sell}k sold</h4>
                    </div>
                </div>
                <div className='flex justify-center shadow-md hover:rounded-b-lg'>
                    <Link className='bg-[#F84B2F] rounded-b-md lg:py-2 py-1 text-white  w-full text-center text-sm font-semibold hover:text-[#F84B2F] hover:bg-gray-200' to='/'>Add to cart</Link>
                </div>
            </Link>
        </div>
    );
};

export default SingleProductCard;
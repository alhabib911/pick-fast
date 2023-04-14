import React from 'react';
import { Link } from 'react-router-dom';

const HotProductsCard = (props) => {
    const { name, image, sell, offer } = props.hotProduct
    return (
        <div className='shadow-md hover:border hover:border-[#F84B2F]'>
            <Link to='/'>
                <h5 className='inline-block px-3 py-2 rounded-r-3xl bg-green-600 text-white font-semibold text-xs shadow-md'>{offer}% off</h5>
                <img className='' src={image} alt="" />
                <h2 className='text-sm font-semibold text-[#F84B2F] text-center py-2'>{name}</h2>
                <h1 className='text-center bg-[#F84B2F] py-1 text-gray-100'>Monthly Sells {sell}k+</h1>
            </Link>
        </div>
    );
};

export default HotProductsCard;
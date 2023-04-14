import React from 'react';

const PickBrandCard = (props) => {
    const { id, icon, offer } = props.brand
    return (
        <div>
            <div className='flex justify-center'>
                <img className='lg:w-auto md:w-2/4' src={icon} alt="" />
            </div>
            <h5 className='text-center lg:text-lg md:text-sm text-[#F84B2F]'>{offer}</h5>
        </div>
    );
};

export default PickBrandCard;
import React from 'react';

const PickBrandCard = (props) => {
    const {id, icon, offer} = props.brand
    return (
        <div>
            <img src={icon} alt="" />
            <h5 className='text-center text-lg text-[#F84B2F]'>{offer}</h5>
        </div>
    );
};

export default PickBrandCard;
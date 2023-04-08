import React from 'react';
import BannerSection from './BannerSection';
import PolicyMenu from './PolicyMenu';
import FlashSale from './FlashSale';

const BodyOne = () => {
    return (
        <div className='bg-gray-50'>
            <BannerSection/>
            <PolicyMenu/>
            <FlashSale/>
        </div>
    );
};

export default BodyOne;
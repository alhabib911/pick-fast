import React from 'react';
import BannerSection from './BannerSection';
import PolicyMenu from './PolicyMenu';
import FlashSale from './FlashSale';
import PickMall from './PickMall/PickMall';

const BodyOne = () => {
    return (
        <div className='bg-gray-50'>
            <BannerSection/>
            <PolicyMenu/>
            <FlashSale/>
            <PickMall/>
        </div>
    );
};

export default BodyOne;
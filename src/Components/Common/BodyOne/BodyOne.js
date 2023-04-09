import React from 'react';
import BannerSection from './BannerSection';
import PolicyMenu from './PolicyMenu';
import FlashSale from './FlashSale';
import PickMall from './PickMall/PickMall';
import SingleProduct from './SingleProduct/SingleProduct';
import HotProduct from './HotProduct/HotProduct';

const BodyOne = () => {
    return (
        <div className='bg-gray-50'>
            <BannerSection/>
            <PolicyMenu/>
            <FlashSale/>
            <PickMall/>
            <HotProduct/>   
            <SingleProduct/>
        </div>
    );
};

export default BodyOne;
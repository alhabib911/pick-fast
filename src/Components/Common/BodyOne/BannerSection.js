import React from 'react';
import banner from '../../../Asset/BodyOne/BannerSection/banner-one.jpg'
import sideBannerOne from '../../../Asset/BodyOne/BannerSection/side-banner-one.jpg'
import sideBannerTwo from '../../../Asset/BodyOne/BannerSection/side-banner-two.png'

const BannerSection = () => {
    return (
        <div>
            <div className='flex gap-1 mx-28'>
                <div className='w-2/3'>
                    <img src={banner} alt="" />
                </div>
                <div className='w-2/6'>
                    <img src={sideBannerOne} alt="" />
                    <img src={sideBannerTwo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default BannerSection;
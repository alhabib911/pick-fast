import React from 'react';
import banner from '../../../Asset/BodyOne/BannerSection/banner-one.jpg'
import sideBannerOne from '../../../Asset/BodyOne/BannerSection/side-banner-one.jpg'
import sideBannerTwo from '../../../Asset/BodyOne/BannerSection/side-banner-two.png'

const BannerSection = () => {
    return (
        <div>
            <div className='flex lg:justify-start md:justify-end justify-center gap-1 lg:mx-28 md:mx-5 mx-0'>
                <div className='lg:w-2/3 w-12/12'>
                    <img src={banner} alt="" />
                </div>
                <div className='lg:w-2/6 lg:flex hidden'>
                    <div>
                        <img src={sideBannerOne} alt="" />
                        <img src={sideBannerTwo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;
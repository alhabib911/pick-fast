import React from 'react';
import banner from '../../../Asset/BodyOne/BannerSection/banner-one.jpg'
import sideBannerOne from '../../../Asset/BodyOne/BannerSection/side-banner-one.jpg'
import sideBannerTwo from '../../../Asset/BodyOne/BannerSection/side-banner-two.png'

const BannerSection = () => {
    return (
        <div>
            <div>
                <div>
                    <div className='lg:mx-28 lg:flex md:flex hidden pt-2 bg-white w-[230px] absolute'>
                        <ul>
                            <li className='py-1 hover:bg-gray-100 mt-5 pl-4 text-sm text-gray-600'>Women's & Girls' Fashion</li>
                            <li className='py-1 hover:bg-gray-100 pl-4 text-sm text-gray-600'>Health & Beauty</li>
                            <li className='py-1 hover:bg-gray-100 pl-4 text-sm text-gray-600'>Watches, Bags, Jewellery</li>
                            <li className='py-1 hover:bg-gray-100 pl-4 text-sm text-gray-600'>Men's & Boys' Fashion</li>
                            <li className='py-1 hover:bg-gray-100 pl-4 text-sm text-gray-600'>Babies & Toys</li>
                            <li className='py-1 hover:bg-gray-100 pl-4 text-sm text-gray-600'>Electronics Devices</li>
                            <li className='py-1 hover:bg-gray-100 pl-4 text-sm text-gray-600'>TV & Home Appliances</li>
                            <li className='py-1 hover:bg-gray-100 pl-4 text-sm text-gray-600'>Groceries & Pets</li>
                            <li className='py-1 hover:bg-gray-100 pl-4 text-sm text-gray-600 pb-1'>Home & Lifestyle</li>
                        </ul>
                    </div>
                </div>
            </div>
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
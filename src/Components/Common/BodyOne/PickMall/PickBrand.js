import React from 'react';
import BrandLogoOne from '../../../../Asset/BodyOne/MallSlider/MallBrandLogo/Mall-Brand-Logo-One.jpg'
import BrandLogoTwo from '../../../../Asset/BodyOne/MallSlider/MallBrandLogo/Mall-Brand-Logo-Twojpg.jpg'
import BrandLogoThree from '../../../../Asset/BodyOne/MallSlider/MallBrandLogo/Mall-Brand-Logo-Three.jpg'
import BrandLogoFour from '../../../../Asset/BodyOne/MallSlider/MallBrandLogo/Mall-Brand-Logo-Four.jpg'
import BrandLogoFive from '../../../../Asset/BodyOne/MallSlider/MallBrandLogo/Mall-Brand-Logo-Five.jpg'
import BrandLogoSix from '../../../../Asset/BodyOne/MallSlider/MallBrandLogo/Mall-Brand-Logo-Six.jpg'
import PickBrandCard from './PickBrandCard';

const PickBrand = () => {
    const brand =[
        {
            id: 1,
            icon: BrandLogoOne,
            offer: "Upto 65%"
        },
        {
            id: 2,
            icon: BrandLogoTwo,
            offer: "Upto 65%"
        },
        {
            id: 3,
            icon: BrandLogoThree,
            offer: "Upto 65%"
        },
        {
            id: 4,
            icon: BrandLogoFour,
            offer: "Upto 65%"
        },
        {
            id: 5,
            icon: BrandLogoFive,
            offer: "Upto 65%"
        },
        {
            id: 6,
            icon: BrandLogoSix,
            offer: "Upto 65%"
        }
    ]
    return (
        <div className='grid grid-cols-4'>
            {
                brand.map(brand =>(
                    <PickBrandCard brand={brand}></PickBrandCard>
                ))
            }
        </div>
    );
};

export default PickBrand;
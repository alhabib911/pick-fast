import React from 'react';
import ProductOne from '../../../../Asset/BodyOne/SingleProduct/Single-Product-One.jpg'
import ProductTwo from '../../../../Asset/BodyOne/SingleProduct/Single-Product-Two.jpg'
import ProductThree from '../../../../Asset/BodyOne/SingleProduct/Single-Product-Three.jpg'
import ProductFour from '../../../../Asset/BodyOne/SingleProduct/Single-Product-Four.jpg'
import ProductFive from '../../../../Asset/BodyOne/SingleProduct/Single-Product-Five.jpg'
import ProductSix from '../../../../Asset/BodyOne/SingleProduct/Single-Product-Six.jpg'
import ProductSeven from '../../../../Asset/BodyOne/SingleProduct/Single-Product-Seven.jpg'
import ProductEight from '../../../../Asset/BodyOne/SingleProduct/Single-Product-Eight.jpg'
import ProductNine from '../../../../Asset/BodyOne/SingleProduct/Single-Product-Nine.jpg'
import ProductTen from '../../../../Asset/BodyOne/SingleProduct/Single-Product-Ten.jpg'
import HotProductsCard from './HotProductsCard';

const HotProduct = () => {
    const hotProduct = [
        {
            id: 1,
            name: 'White Coffee',
            image: ProductOne,
            offer: 5,
            sell: 1,
        },
        {
            id: 2,
            name: 'White Coffee',
            image: ProductTwo,
            offer: 5,
            sell: 1,
        },
        {
            id: 3,
            name: 'White Coffee',
            image: ProductThree,
            offer: 5,
            sell: 1,
        },
        {
            name: 'White Coffee',
            image: ProductFour,
            offer: 5,
            sell: 1,
        },
        {
            id: 5,
            name: 'White Coffee',
            image: ProductFive,
            offer: 5,
            sell: 1,
        },
        {
            id: 6,
            name: 'White Coffee',
            image: ProductSix,
            offer: 5,
            sell: 1,
        },
        {
            id: 7,
            name: 'White Coffee',
            image: ProductSeven,
            offer: 5,
            sell: 1,
        },
        {
            id: 8,
            name: 'White Coffee',
            image: ProductEight,
            offer: 5,
            sell: 1,
        },
        {
            id: 9,
            name: 'White Coffee',
            image: ProductNine,
            offer: 5,
            sell: 1,
        },
        {
            id: 10,
            name: 'White Coffee',
            image: ProductTen,
            offer: 5,
            sell: 1,
        }
    ]
    return (
        <div className='lg:mx-20 bg-white lg:mt-6 md:mt-5 mt-2'>
            <div className='bg-white pt-4 lg:pl-10 pl-4 border-b-4 border-[#F84B2F]'>
                <h2 className='text-[#F84B2F] lg:text-xl md:text-lg text-sm pb-3'>Hot Product</h2>
            </div>
            <div className='grid lg:grid-cols-6 md:grid-cols-6 grid-cols-3 lg:px-10 px-2 lg:gap-4 md:gap-2 gap-1 py-6'>
                {
                   hotProduct.slice(0, 6).map(hotProduct => (
                    <HotProductsCard hotProduct={hotProduct}></HotProductsCard>
                   )) 
                }
            </div>
        </div>
    );
};

export default HotProduct;
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
import SingleProductCard from './SingleProductCard';

const SingleProduct = () => {
    const product = [
        {
            id: 1,
            name: '(Bundle of 3) OldTown Hazelnut 3 in 1 White Coffee',
            image: ProductOne,
            offer: 4,
            sell: 1,
            price: 31,
        },
        {
            id: 2,
            name: '(Bundle of 3) OldTown Hazelnut 3 in 1 White Coffee',
            image: ProductTwo,
            offer: 4,
            sell: 1,
            price: 31,
        },
        {
            id: 3,
            name: '(Bundle of 3) OldTown Hazelnut 3 in 1 White Coffee',
            image: ProductThree,
            offer: 4,
            sell: 1,
            price: 31,
        },
        {
            id: 4,
            name: '(Bundle of 3) OldTown Hazelnut 3 in 1 White Coffee',
            image: ProductFour,
            offer: 4,
            sell: 1,
            price: 31,
        },
        {
            id: 5,
            name: '(Bundle of 3) OldTown Hazelnut 3 in 1 White Coffee',
            image: ProductFive,
            offer: 4,
            sell: 1,
            price: 31,
        },
        {
            id: 6,
            name: '(Bundle of 3) OldTown Hazelnut 3 in 1 White Coffee',
            image: ProductSix,
            offer: 4,
            sell: 1,
            price: 31,
        },
        {
            id: 7,
            name: '(Bundle of 3) OldTown Hazelnut 3 in 1 White Coffee',
            image: ProductSeven,
            offer: 4,
            sell: 1,
            price: 31,
        },
        {
            id: 8,
            name: '(Bundle of 3) OldTown Hazelnut 3 in 1 White Coffee',
            image: ProductEight,
            offer: 4,
            sell: 1,
            price: 31,
        },
        {
            id: 9,
            name: '(Bundle of 3) OldTown Hazelnut 3 in 1 White Coffee',
            image: ProductNine,
            offer: 4,
            sell: 1,
            price: 31,
        },
        {
            id: 10,
            name: '(Bundle of 3) OldTown Hazelnut 3 in 1 White Coffee',
            image: ProductTen,
            offer: 4,
            sell: 1,
            price: 31,
        }, {
            id: 1,
            name: '(Bundle of 3) OldTown Hazelnut 3 in 1 White Coffee',
            image: ProductOne,
            offer: 4,
            sell: 1,
            price: 31,
        },
        {
            id: 2,
            name: '(Bundle of 3) OldTown Hazelnut 3 in 1 White Coffee',
            image: ProductTwo,
            offer: 4,
            sell: 1,
            price: 31,
        },
        {
            id: 3,
            name: '(Bundle of 3) OldTown Hazelnut 3 in 1 White Coffee',
            image: ProductThree,
            offer: 4,
            sell: 1,
            price: 31,
        },
        {
            id: 4,
            name: '(Bundle of 3) OldTown Hazelnut 3 in 1 White Coffee',
            image: ProductFour,
            offer: 4,
            sell: 1,
            price: 31,
        },
        {
            id: 5,
            name: '(Bundle of 3) OldTown Hazelnut 3 in 1 White Coffee',
            image: ProductFive,
            offer: 4,
            sell: 1,
            price: 31,
        },
        {
            id: 6,
            name: '(Bundle of 3) OldTown Hazelnut 3 in 1 White Coffee',
            image: ProductSix,
            offer: 4,
            sell: 1,
            price: 31,
        },
        {
            id: 7,
            name: '(Bundle of 3) OldTown Hazelnut 3 in 1 White Coffee',
            image: ProductSeven,
            offer: 4,
            sell: 1,
            price: 31,
        },
        {
            id: 8,
            name: '(Bundle of 3) OldTown Hazelnut 3 in 1 White Coffee',
            image: ProductEight,
            offer: 4,
            sell: 1,
            price: 31,
        },
        {
            id: 9,
            name: '(Bundle of 3) OldTown Hazelnut 3 in 1 White Coffee',
            image: ProductNine,
            offer: 4,
            sell: 1,
            price: 31,
        },
        {
            id: 10,
            name: '(Bundle of 3) OldTown Hazelnut 3 in 1 White Coffee',
            image: ProductTen,
            offer: 4,
            sell: 1,
            price: 31,
        }
    ]
    return (
        <div className='lg:mx-10 pt-6 lg:px-10 px-2 pb-10'>
            <div className='bg-white pt-4 lg:pl-10 border-b-4 border-[#F84B2F]'>
                <h2 className='text-[#F84B2F] text-xl pb-3'>Just For You</h2>
            </div>
            <div className='grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 lg:gap-4 md:gap-2 gap-1 pt-3'>
                {
                    product.map(product => (
                        <SingleProductCard product={product}></SingleProductCard>
                    ))
                }
            </div>
            <div className='flex justify-center pt-8 lg:pb-0 md:pb-0 pb-8'>
                <button className='border px-28 py-2 text-[#F84B2F] bg-white hover:text-white hover:bg-[#F84B2F] shadow-sm hover:shadow-sm' type="submit">See More</button>
            </div>
        </div>
    );
};

export default SingleProduct;
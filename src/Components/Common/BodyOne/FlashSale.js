import React, { useEffect, useState } from 'react';
import FlashSaleCard from './FlashSaleCard';
import { IoIosFlash } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import brandBanner from '../../../Asset/BodyOne/BrandBanner/brand-banner.jpg'

const FlashSale = () => {
    const [flashSale, setflashSale] = useState([])

    useEffect(() => {
        fetch("flashsale.json")
            .then(res => res.json())
            .then(data => setflashSale(data))
    }, [])
    return (
        <div className='lg:mx-20 lg:px-10 md:px-5 px-2 lg:mt-5 md:mt-3 mt-1 lg:pt-5 md:pt-3 pt-1  bg-white'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <div className='relative lg:text-2xl md:text-lg font-semibold'>
                        F
                    </div>
                    <div className='absolute pl-1 text-[#F84B2F] lg:text-4xl md:text-2xl font-semibold'>
                        <IoIosFlash />
                    </div>
                    <div className='lg:pl-3 md:pl-1 lg:text-2xl md:text-lg font-semibold'>
                        ash Sales
                    </div>
                    <div className='flex lg:text-xl md:text-sm font-semibold pl-10'>
                        <div>
                            23:
                        </div>
                        <div>59:</div>
                        <div>00</div>
                    </div>
                </div>
                <div>
                    <Link className='flex items-center text-[#F84B2F] font-semibold text-sm' to='/'>See More <MdKeyboardArrowRight/> </Link>
                </div>
            </div>
            <div className='grid lg:grid-cols-6 md:grid-cols-6 grid-cols-3 lg:gap-4 md:gap-2 gap-1 lg:pt-5 md:pt-3 pt-1'>
                {
                    flashSale.map(flashSale => <FlashSaleCard
                        flashSale={flashSale}
                    ></FlashSaleCard>
                    )
                }
            </div>
            <div className='py-5'>
                <img src={brandBanner} alt="" />
            </div>
        </div>
    );
};

export default FlashSale;
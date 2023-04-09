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
        <div className=' mx-20 px-10 mt-5 pt-5  bg-white'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <div className='relative text-2xl font-semibold'>
                        F
                    </div>
                    <div className='absolute pl-1 text-[#F84B2F] text-4xl font-semibold'>
                        <IoIosFlash />
                    </div>
                    <div className='pl-3 text-2xl font-semibold'>
                        ash Sales
                    </div>
                    <div className='flex text-xl font-semibold pl-10'>
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
            <div className='grid grid-cols-6 gap-4 pt-5'>
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
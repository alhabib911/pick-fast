import React from 'react';

const FlashSaleCard = (props) => {
    const { Selling, Picture, NewPrice } = props.flashSale
    return (
        <div className='bg-white shadow-sm rounded-sm'>
            <img className=' rounded-md' src={Picture} alt="" />
            <div className='mx-1'>
                <div className='gap-2 pb-3'>
                    <h4 className='text-center lg:text-3xl md:text-lg text-sm font-semibold text-[#F84B2F] pt-1'>${NewPrice}</h4>
                    <div class="lg:flex hidden justify-between mb-1">
                        <span class="text-sm font-bold text-[#F84B2F] dark:text-white">SELLING FAST</span>
                        <span class="text-sm font-medium text-[#F84B2F] dark:text-white">{Selling}%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div class="bg-[#F84B2F] h-2.5 rounded-full w-2/12"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlashSaleCard;
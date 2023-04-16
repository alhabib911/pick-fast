import React from 'react';
import NavbarFooter from '../../Common/NavbarFooter/NavbarFooter';
import Navbar from '../../Common/Navbar/Navbar';
import Footer from '../../Common/Footer/Footer';
import { AiOutlineDelete } from 'react-icons/ai';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import ProductOne from '../../../Asset/BodyOne/SingleProduct/Single-Product-One.jpg'
import ProductTwo from '../../../Asset/BodyOne/SingleProduct/Single-Product-Two.jpg'
import ProductThree from '../../../Asset/BodyOne/SingleProduct/Single-Product-Three.jpg'
import CartCard from './CartCard';

const Cart = () => {
    const product = [
        {
            id: 1,
            name: '(Bundle of 3) OldTown Hazelnut 3 in 1 White Coffee',
            image: ProductOne,
            offer: 4,
            oldPrice: 52,
            price: 31,
        },
        {
            id: 2,
            name: '(Bundle of 3) OldTown Hazelnut 3 in 1 White Coffee',
            image: ProductTwo,
            offer: 4,
            oldPrice: 52,
            price: 31,
        },
        {
            id: 3,
            name: '(Bundle of 3) OldTown Hazelnut 3 in 1 White Coffee',
            image: ProductThree,
            offer: 4,
            oldPrice: 52,
            price: 31,
        }]
    return (
        <div>
            <NavbarFooter />
            <Navbar />
            <div>
                <div className='lg:flex gap-4 lg:mx-20 my-6 '>
                    <div className='lg:w-2/3'>
                        <div className=' flex justify-between items-center px-6 py-2 bg-white'>
                            <div className='flex items-center'>
                                <input className='w-4 h-7' type="checkbox" name="select-all" id="" />
                                <h3 className='px-1'>Select All</h3>
                                (3 item(s))
                            </div>
                            <div>
                                <button className='flex items-end hover:text-[#F84B2F]'>
                                    <span className='text-lg'><AiOutlineDelete />
                                    </span><span className='text-xs'> Delete</span>
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center px-6 py-2 bg-white mt-2 border-b-2'>
                                <input className='w-4 h-7' type="checkbox" name="select-all" id="" />
                                <h3 className='px-1'>Pick Mall</h3>
                                <MdOutlineKeyboardArrowRight />
                            </div>
                            <div className='pt-2 bg-white'>
                                {
                                    product.map(product => (
                                        <CartCard product={product}></CartCard>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className='lg:w-1/3 bg-white px-6 py-4 h-64 lg:mt-0 mt-2'>
                        <h2 className='text-lg'>Order Summery</h2>
                        <div className='pt-2 flex justify-between'>
                            <p className='text-gray-500'>Subtotal (0 items) </p>
                            <p className='text-lg'>$ 0</p>
                        </div>
                        <div className='flex justify-between pt-3'>
                            <input className='outline-none py-2 border pl-2 w-3/4 rounded' type="text" name="voucher" id="" placeholder='Enter Voucher Code' />
                            <button className='bg-[#F84B2F] px-5 text-white rounded'>Apply</button>
                        </div>
                        <div className='flex justify-between pt-6'>
                            <p>Total</p>
                            <p className='text-[#F84B2F] text-lg'>$ 0</p>
                        </div>
                        <button className='bg-[#F84B2F] w-full mt-5 py-2 lg:mb-0 md:mb-0 mb-20 text-white shadow-md'>PROCEED TO CHECKOUT (0)</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Cart;

import React from 'react';
import { IoMdCart } from 'react-icons/io';
import Product from '../../../Asset/BodyOne/SingleProduct/Single-Product-Eight.jpg'
import './Notification.css'

const Cart = () => {
    return (
        <div>
            <div class="dropdown">
                <button class="dropbtn"><span className='text-2xl'><IoMdCart /></span></button>
                <div class="dropdown-content lg:w-[360px] hidden px-3 pt-2">
                    <p className='text-sm text-black '>Recent Added Products</p>
                    <div className='flex items-start gap-2'>
                        <img className='w-14 h-14 lg:flex md:hidden' src={Product} alt="" />
                        <p className='text-sm'>(Bundle of 3) OldTown Hazelnut 3 in 1...</p>
                        <p className='text-sm'>$31</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
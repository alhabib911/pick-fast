import React from 'react';
import './Notification.css'
import { MdNotifications } from 'react-icons/md';

const Notification = () => {
    return (
        <div>
            <div class="dropdown">
                <button class="dropbtn">
                    <li className='flex items-center'>
                        <span className='text-lg'><MdNotifications /></span>
                        Notification
                    </li>
                </button>
                <div class="dropdown-content pt-4 pl-4">
                    <h1 className='text-sm font-semibold'>Notification</h1>
                <div className='pt-28'>
                    <h2 className='text-center text-[#F84B2F]'>Login to see all Notifications</h2>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Notification;
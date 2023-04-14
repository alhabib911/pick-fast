import React from 'react';
import Navbar from '../../Common/Navbar/Navbar';
import Footer from '../../Common/Footer/Footer';
import BodyOne from '../../Common/BodyOne/BodyOne';
import NavbarFooter from '../../Common/NavbarFooter/NavbarFooter';

const HomeOne = () => {
    return (
        <div>
            <NavbarFooter/>
            <Navbar/>
            <BodyOne/>
            <Footer/>
        </div>
    );
};

export default HomeOne;
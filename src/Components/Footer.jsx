import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <div className="container w-full   flex flex-col items-center backdrop-blur-sm bg-zinc-800/80 text-white py-[3vw] mt-[5vw] ">
            <div className="flex gap-10 mb-4 justify-between ">
                <a href="#" className="text-[4vw] ">
                    <FaInstagram />
                </a>
                <a href="#" className="text-[4vw]">
                    <FaTwitter />
                </a>
                <a href="#" className="text-[4vw]">
                    <FaLinkedin />
                </a>
                <a href="#" className="text-[4vw]">
                    <FaYoutube />
                </a>
            </div>
            <div className='grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-3'>
                {
                    ["About", "Need Help?", "Contact", "Privacy", "Terms of use", "Advertising", "Partners", "Home"].map((item, index) => (
                        <Link to={'/'} key={index} >{item}</Link>
                    ))
                }
            </div>
            <div className='mt-[2vw] font-bold'>© MediPed. All rights reserved</div>
        </div>
    );
};

export default Footer;

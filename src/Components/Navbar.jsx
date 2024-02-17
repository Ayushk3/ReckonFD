import { motion, useCycle } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import toast from 'react-hot-toast';

const Navbar = (props) => {
    const isLoggedIn = props.isLoggedIn;
    const setIsLoggedIn = props.setIsLoggedIn;
    const [isOpen, setisopen] = useState(false);
    return (
        <motion.div initial={{ y: '-100%' }} animate={{ y: 0 }} transition={{ ease: 'easeInOut', delay: .4 }} className='py-1 w-full z-10 px-4 min-h-[5vw] flex items-center border-b-[1px] border-zinc-400 justify-between fixed backdrop-blur-sm bg-zinc-500/20'>
            <div className='logo lg:text-[5vh] md:text-[4vh] flex lg:gap-1 uppercase sm:text-[3vh] sm:gap-0 '>
                {["M", "e", "d", "I", "P", "e", "d", ".com"].map((item, index) => (
                    <Link to={'/'} key={index}>
                        <span className={`font-bold hover:text-red-500 cursor-pointer ${index === 3 ? 'text-red-500 lowercase' : index === 7 ? 'lowercase text-red-500' : 'text-blue-500'} `}>{item}</span>
                    </Link>
                ))}
            </div>

            <div className='lg:hidden mr-[7vw] flex justify-center items-center'>
                <button
                    onClick={() => setisopen(!isOpen)}
                    className={`text-3xl font-bold z-50 absolute text-white ${isOpen ? `right-[5vw]` : `right-[48vw]`}`}
                >
                    {isOpen ? <ImCross /> : <GiHamburgerMenu />}
                </button>
            </div>
            <div className='hidden lg:flex flex-wrap md:hidden sm:hidden mr-[7vw] text-white '>
                {["AboutUs", "Prediction", "Reviews", "Offers","News", "ContactUs"].map((item, index) => (
                    <Link
                        to={`/${item}`}
                        key={index}
                        className={`font-semibold text-lg hover:underline hover:text-red-500 ${index === 5 ? 'ml-8' : 'ml-4'}`}
                    >
                        {item}
                    </Link>
                ))}
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className='lg:hidden fixed bg-opacity-30'
                    onClick={() => setisopen(!isOpen)}
                >
                    {/* Mobile Menu Content */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.3 }}
                        className='w-1/2 h-screen backdrop-blur-sm bg-blue-900/95 text-zinc-300 p-6 fixed top-0 right-0 flex flex-col'
                    >
                        {["AboutUs", "Prediction", "Reviews", "Offers", "ContactUs","News"].map((item, index) => (
                            <div key={index} onClick={() => setisopen(!isOpen)}>
                                <Link
                                    to={`/${item}`}
                                    className='hover:underline block font-semibold md:text-lg sm:text-md mb-4 hover:text-red-500'
                                >
                                    {item}
                                </Link>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            )}
            <div className="flex items-center gap-x-4 text-white">
                {!isLoggedIn && (
                    <Link to="/login">
                        <button className="bg-[rgba(0,0,34,1)] py-[0.6vw]  px-[0.6vw] rounded-md border hover:bg-[#1450A3] font-bold  border-zinc-300">
                            Login
                        </button>
                    </Link>
                )}
                {!isLoggedIn && (
                    <Link to="/signup">
                        <button className="bg-[rgba(0,0,34,1)]  py-[0.6vw]  px-[0.6vw]  rounded-md border hover:bg-[#1450A3] font-bold  border-zinc-300">
                            Sign Up
                        </button>
                    </Link>
                )}
                {isLoggedIn && (
                    <Link to="/">
                        <button
                            onClick={() => {
                                setIsLoggedIn(false);
                                toast.success("Logout Sucessfully");
                            }}
                            className="bg-[rgba(0,0,34,1)] py-[1vw] px-[1vw] rounded-md border border-zinc-300"
                        >
                            Log Out
                        </button>
                    </Link>
                )}
            </div>
        </motion.div>
    );
}

export default Navbar;

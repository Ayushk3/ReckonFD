import { motion } from 'framer-motion';
import React from 'react'
import { Link } from 'react-router-dom'
import RotatingCube from './RotatingCube';

function About() {
    return (
        <div className='w-full p-[4.5vw] border-t-2 bg-[rgba(0,0,0,34,1)] rounded-tl-3xl rounded-tr-3xl'>
            <h1 className='text-zinc-300 font-["Neue_Montreal"] text-[2vw] tracking-tight leading-[4.5vw] '>
                MediPed is a cutting-edge health tech initiative designed to revolutionize healthcare accessibility by leveraging advanced technologies, providing timely medical assistance and information at your fingertips.
            </h1>
            <div className='w-full border-t-[1px] flex gap-5 pt-[3vw] border-[#bdd46d] mt-[3vw] lg:flex-row justify-center items-center md:flex-col sm:flex-col'>
                <div className='w-1/2'>
                    <h1 className=''>
                        {
                            ["O", "u", 'r', ' ', 'A', 'p', 'p', 'r', 'o', 'a', 'c', 'h'].map((word, index) => {
                                return <span key={index} className='font-semibold text-white text-[5vw]'>{word}</span>;
                            })
                        }
                    </h1>
                    <Link to='/AboutUs'>
                        <button className='px-[1.3vw] py-[1.2vw] gap-[3vw] uppercase bg-red-600 rounded-full mt-10  text-white flex items-center justify-center'>
                            <div>
                                Read More
                            </div>
                            <div>
                                <motion.div
                                    className='w-3 h-3 bg-white rounded-full'
                                    initial={{ opacity: 2, scale: 1 }}
                                    animate={{ opacity: 0.8, scale: 1.5 }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                ></motion.div>
                            </div>
                        </button></Link>
                </div>
                {/* <div className='w-full md:w-1/2 h-[70vh] bg-cover bg-center rounded-3xl cursor-pointer justify-center items-center hidden md:block  lg:block' style={{ backgroundImage: `url(https://images.pexels.com/photos/3936360/pexels-photo-3936360.jpeg?auto=compress&cs=tinysrgb&w=800)` }}></div> */}
                <div className=''><RotatingCube /></div>
            </div>

        </div>
    )
}

export default About
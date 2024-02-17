import { easeInOut, motion } from 'framer-motion';
import React from 'react'
import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import './blink.css'

function Eyes() {

    const [rotate, setRotate] = useState(0);
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;
            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI); // for converting into degree using atan2 and multiplying it with (180 / Math.PI)
            setRotate(angle - 180);
        })
    })
    return (
        <div className='eyes w-full   overflow-hidden  '>
            <div className='pt-[10vw] text-white lg:pt-[8vw] flex  items-center  flex-col relative w-full lg:h-[70vh] md:h-[70vh] sm:h-[55vh] h-[30vh] bg-cover bg-center' style={{ background: 'linear-gradient(45deg, rgba(0,0,34,1) 43%, rgba(10,31,60,1) 90%,rgba(10,31,60,1) 90%, rgba(10,31,60,1) 95%)' }}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeInOut", delay: 0.7 }} className='text-[2.5vw] font-bold flex justify-center items-center mt-[1vw]'>
                    Let our <span className='text-red-600 animate-blink '>&nbsp;eyes&nbsp;</span>  be the vigilant guardians of your health
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeInOut", delay: 1.1 }} className='text-[2.5vw] font-bold flex justify-center items-center '>
                    watching over every chapter of your well-being.
                </motion.div>
                <motion.div className='absolute top-1/2 left-1/2 -translate-x-[50%] flex gap-10 lg:pt-[12vw] pt-[14vw]  -translate-y-[50%]'>
                    <div className='w-[13vw] h-[13vw] rounded-full bg-zinc-200 flex justify-center items-center'>
                        <div className='w-[9vw] h-[9vw] cursor-pointer bg-zinc-900 rounded-full relative' >
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className=' line  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 '>
                                <div className='bg-zinc-100 rounded-full w-[2.5vw] h-[2.5vw]' />
                            </div>
                        </div>
                    </div>
                    <div className='w-[13vw] h-[13vw] rounded-full bg-zinc-200 flex justify-center items-center'>
                        <div className='w-[9vw] h-[9vw] cursor-pointer bg-zinc-900  rounded-full relative'>
                            <div className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 '>
                                <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 '>
                                    <div className='bg-zinc-100 rounded-full w-[2.5vw] h-[2.5vw]' />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <Link
                    to="https://chatmodel-deployment1.onrender.com/"
                    target="_blank"
                >
                    <div className='bg-red-600 w-[8vw] h-[25vw]  flex flex-col absolute right-[-2vw] rounded-3xl top-1/3'>

                        <div className='text-[3vw] font-bold absolute mt-[4vw] right-[3.4vw]'>C</div>
                        <div className='text-[3vw] font-bold absolute mt-[8vw] right-[3.4vw]'>H</div>
                        <div className='text-[3vw] font-bold absolute mt-[12vw] right-[3.4vw]'>A</div>
                        <div className='text-[3vw] font-bold absolute mt-[16vw] right-[3.4vw]'>T</div>

                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Eyes
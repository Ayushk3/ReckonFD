import { delay, easeInOut, motion } from 'framer-motion'
import React, { useState } from 'react'

function Services() {
    const [hover1, sethover1] = useState(false);
    const [hover2, sethover2] = useState(false);
    return (
        <div className='w-full border-t-2 rounded-r-[2vw] rounded-l-[2vw] flex flex-col py-20 mt-[2.5vw]' style={{ background: 'linear-gradient(45deg, rgba(0,0,34,1) 43%, rgba(10,31,60,1) 90%,rgba(10,31,60,1) 90%, rgba(10,31,60,1) 95%)' }}>
            <div className='w-full px-20 border-b-[1px] border-zinc-400 pb-[4vw]'>
                <h1 className='text-[8vw] text-white  tracking-tight'>Reports </h1>
            </div>
            <div className='px-20 flex justify-center items-center flex-wrap'>
                <div className=' lg:flex md:flex  hidden w-full mt-10 gap-10 cards'>
                    <div className='cardcontainer  relative  w-1/2 h-[65vh] '>
                        <a href="https://ncvbdc.mohfw.gov.in/index.php" target="_blank" rel="noopener noreferrer">
                            <div onMouseEnter={() => sethover1(true)} onMouseLeave={() => sethover1(false)} className='w-full mt-10 h-full overflow-hidden  rounded-xl'  >
                                <h1 className=' overflow-hidden flex absolute text-[6vw] z-10 text-[#d4ef6f]  leading-none transition-all duration-300 tracking-tight -translate-x-1/2 top-1/2 left-full -translate-y-1/2'>
                                    {
                                        "Cases".split('').map((item, index) => {
                                            return <motion.span initial={{ y: "100%" }} className='inline-block uppercase' animate={hover1 ? ({ y: "0" }) : ({ y: "100%" })} transition={{ ease: easeInOut, delay: index * 0.01 }} key={index}>{item}</motion.span>
                                        })
                                    }
                                </h1>
                                <motion.img
                                    initial={{ scale: 1 }}
                                    animate={{ scale: hover1 ? 0.9 : 1 }}
                                    className='w-full h-full bg-cover cursor-pointer hover:scale-90'
                                    src="https://images.news18.com/ibnlive/uploads/2022/07/dengue-cases.png?impolicy=website&width=0&height=0"
                                />

                            </div>
                        </a>
                    </div>

                    <div className='cardcontainer relative w-1/2 h-[65vh]'>
                        <a href="https://ncvbdc.mohfw.gov.in/index.php" target="_blank" rel="noopener noreferrer">
                            <div onMouseEnter={() => sethover2(true)} onMouseLeave={() => sethover2(false)} className='w-full mt-10 h-full overflow-hidden rounded-xl'>
                                <h1 className='absolute text-[6vw] z-10 overflow-hidden fle text-[#d4ef6f] leading-none transition-all duration-300 tracking-tight -translate-x-1/2 top-1/2 left-0 -translate-y-1/2'>
                                    {
                                        "Reports".split('').map((item, index) => {
                                            return <motion.span initial={{ y: "100%" }} transition={{ ease: easeInOut, delay: index * 0.01 }} className='inline-block uppercase' animate={hover2 ? ({ y: "0" }) : ({ y: "100%" })} key={index}>{item}</motion.span>
                                        })
                                    }
                                </h1>
                                <motion.img
                                    initial={{ scale: 1 }}
                                    animate={{ scale: hover2 ? 0.9 : 1 }}
                                    className='w-full h-full bg-cover cursor-pointer hover:scale-90'
                                    src="https://ncvbdc.mohfw.gov.in/WriteReadData/l892s/dengueindia.jpg"
                                />
                            </div>
                        </a>
                    </div>

                </div>
                <div className=' lg:hidden md:hidden  flex w-full mt-10 gap-10  justify-center '>
                    <div className='  w-1/2 text-[5vw]  flex justify-center text-red-500 items-center'>
                        We Provide Chemical and Natural Recommendations.
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Services
import { motion } from 'framer-motion'
import React from 'react'
import { IoGiftSharp } from "react-icons/io5";

function Offers() {
    return (
        <div className='h-screen w-full flex justify-center items-center'>
            <motion.div
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 2 }}
                className='w-[70vw]  h-[80vh] mt-[6vw] p-[2vw] flex-col  bg-[#171746ad] rounded-3xl shadow-lg shadow-zinc-300 text-[25vw] flex justify-center  items-center'
            >
                <IoGiftSharp color='blue' />
                <motion.h1 className='text-[10vw]  animate-blink text-red-600'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >Coming Soon...</motion.h1>


            </motion.div>

        </div>
    )
}

export default Offers
import React from 'react'
import './Loader.css'
function Loader() {
  return (
    <div className='z-10 absolute top-0  h-screen w-full flex justify-center items-center flex-col' style={{background:'linear-gradient(45deg, rgba(0,0,34,1) 43%, rgba(10,31,60,1) 90%,rgba(10,31,60,1) 90%, rgba(10,31,60,1) 95%)'}}>
        <span className='loader '></span>
        <p className='text-[#ff2f00] font-bold mt-[2vw] text-[3vw]'>LOADING...</p>
    </div>
  )
}

export default Loader
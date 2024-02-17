import React from 'react'
import Eyes from './Eyes'
import Footer from './Footer'
import Services from './Services'
import About from './About'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='overflow-hidden flex flex-col justify-center items-center'>
      <Eyes />
      <div className='bg-[#122378ba]  rounded-[3vw] overflow-hidden text-white flex gap-[2vw] justify-center items-center '>
        {
          ["Prediction", "AboutUs", "ContactUs", "Chat", "Offers"].map((item, idx) => {
            return (
              (idx === 3) ? (
                <Link
                  to="https://chatmodel-deployment1.onrender.com/"
                  target="_blank"
                  key={idx}
                >
                  <div className='text-[2vw] font-bold uppercase cursor-pointer transition-all duration-300 ease-in-out hover:bg-red-600 rounded-full p-2'>
                    {item}
                  </div></Link>
              ) : (
                <Link to={`/${item}`} key={idx}>
                  <div className='text-[2vw] font-bold uppercase cursor-pointer transition-all duration-300 ease-in-out hover:bg-red-600 rounded-full p-2'>
                    {item}
                  </div>
                </Link>
              )
            );
          })

        }
      </div>

      <About />
      <Services />

      <Footer />
    </div>
  )
}

export default Home
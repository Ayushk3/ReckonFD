import { React, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Reviews from './Components/Reviews';
import Prediction from './Components/Prediction';
import Navbar from './Components/Navbar';
import PrivateRoute from './Components/LoginCredential/PrivateRoute'
import Login from './Components/LoginCredential/Login';
import Signup from './Components/LoginCredential/Signup';
import LocomotiveScroll from 'locomotive-scroll';
import RotatingCube from './Components/RotatingCube';
import Offers from './Components/Offers';
import News from './Components/News';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const locomotiveScroll = new LocomotiveScroll();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showLoader ? (
        <div className='min-h-screen min-w-screen justify-center items-center' style={{ background: 'linear-gradient(45deg, rgba(0,0,34,1) 43%, rgba(10,31,60,1) 90%,rgba(10,31,60,1) 90%, rgba(10,31,60,1) 95%)' }}>
          <div className="pl-[35vw] pt-[8vw]">
            <RotatingCube />
          </div>
        </div>
      ) : (
        <div className='selection:bg-black selection:text-white bg-cover h-full bg-no-repeat bg-center' style={{ background: 'linear-gradient(45deg, rgba(0,0,34,1) 43%, rgba(10,31,60,1) 90%,rgba(10,31,60,1) 90%, rgba(10,31,60,1) 95%)' }}>
          <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<AboutUs />} />

            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />

            <Route
              path="/ContactUs"
              element={<PrivateRoute isLoggedIn={isLoggedIn}><ContactUs /></PrivateRoute>}
            />
            <Route path='/Prediction' element={<Prediction />} />
            <Route path='/Reviews' element={<Reviews />} />
            <Route path='/Offers' element={<Offers />} />
            <Route path='/News' element={<News />}/>
          </Routes>
        </div>)
      }</div>
  );
}

export default App;

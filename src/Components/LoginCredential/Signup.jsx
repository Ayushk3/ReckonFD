import {React,useState,useEffect} from 'react'
import Template from './Template';
import Footer from '../Footer';
import Loader from '../Loader';

function Signup({ setIsLoggedIn }) {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <div className='flex flex-col justify-center items-center min-h-[100vh]'>
          <Template
            title="Join the millions Securing their health with us"
            desc1="Secure your present and future with us."
            desc2="Better Health for all."
            image={`https://images.unsplash.com/photo-1520453803296-c39eabe2dab4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNpZ24lMjB1cHxlbnwwfHwwfHx8MA%3D%3D`}
            formType="signup"
            setIsLoggedIn={setIsLoggedIn}
          />
          <Footer />
        </div>)
      }</>
  );
}

export default Signup
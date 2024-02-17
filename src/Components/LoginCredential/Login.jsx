import {React,useEffect,useState} from 'react'
import Template from './Template';
import Footer from '../Footer';
import Loader from '../Loader';

function Login({ setIsLoggedIn }) {
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
        <div className='flex min-h-[100vh] flex-col justify-center items-center '>
          <Template
            title="Welcome Back"
            desc1="Build healthy future together."
            desc2="Health is wealth."
            image={`https://plus.unsplash.com/premium_photo-1681487916420-8f50a06eb60e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9naW58ZW58MHx8MHx8fDA%3D`}
            formType="login"
            setIsLoggedIn={setIsLoggedIn}
          />
          <Footer />
        </div>)}
    </>
  );
}


export default Login
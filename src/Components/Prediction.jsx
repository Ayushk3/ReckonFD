import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { BsChatLeftTextFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import axios from "axios";
import toast from 'react-hot-toast';
import querystring from 'querystring';
import RotatingCube from './RotatingCube';

function Prediction() {
  const API_KEY = '168771779c71f3d64106d8a88376808a';
  const [show, setshow] = useState(false);
  const [city, setcity] = useState('');
  const [showLoader, setShowLoader] = useState(true);
  const [temp, settemp] = useState(0);
  const [humidity, sethumidity] = useState(0);
  const [know, setknow] = useState(false);
  const [form, setform] = useState(true);
  const [Prediction, setPrediction] = useState(null);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (response.ok) {
        toast.success('Fetched')
      }
      else {
        toast.error('Error!!')
      }

      const result = await response.json();

      if (result.main) {
        sethumidity(result.main.humidity);
        settemp(result.main.temp);
        setshow(!show);
      } else {
        console.error('Error: Unexpected response format', result);
      }

      setcity('');

    } catch (error) {
      console.error('Error:', error);
      toast.error('Error');
    }
  };


  const [formData, setFormData] = useState({
    feature2: '',
    feature3: '',
    feature4: '',
    feature5: '',
    feature6: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    setShowLoader(true);
    e.preventDefault();
    setknow(false)
    try {
      const formDataEncoded = new URLSearchParams(formData).toString();

      const response = await axios.post(`${import.meta.env.VITE_API_URL2}/Prediction`, formDataEncoded, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      setform(!form)
      toast.success("Prediction Calculated")
      console.log(response.data);
      setPrediction(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
    setShowLoader(false);
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader ? (
        <div className='min-h-screen min-w-screen flex justify-center items-center' style={{background: 'linear-gradient(45deg, rgba(0,0,34,1) 43%, rgba(10,31,60,1) 90%,rgba(10,31,60,1) 90%, rgba(10,31,60,1) 95%)' }}>
        <div >
        <RotatingCube />
        </div>
        </div>
      ) : (
        <div className="pt-[10vw] min-h-screen flex items-center justify-center flex-col">
          <>
            {
              know ?
                (<div className='flex flex-col text-zinc-100  rounded-lg backdrop:blur-sm bg-blue-900/90 p-[3vw] w-[35vw] min-w-[250px]  justify-center items-center'>
                  <div >
                    <form className=" flex flex-col" method='POST'>
                      <label htmlFor='city' className='font-bold'>Enter Your City </label>
                      <input
                        id='city'
                        type="text"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 font-bold leading-tight focus:outline-none focus:shadow-outline"
                        onChange={(e) => {
                          setcity(e.target.value);
                        }}
                      ></input>
                    </form>
                  </div>
                  <div className='flex flex-col gap-[1vw] text-zinc-100 mt-[1vw]'>
                    <div className="temperature font-bold"><span className='flex flex-col justify-center items-center uppercase'><span>Temperature</span> <span className=' border-[1px] px-2 border-zinc-100 rounded-lg '>{temp}&nbsp;°C</span> </span> </div>
                    <div className="humidity font-bold"><span className='flex flex-col justify-center items-center uppercase'><span>HUMIDITY</span> <span className=' border-[1px] px-2 border-zinc-100 rounded-lg '>{humidity}</span> </span></div>
                  </div>
                  <button
                    className="text-white uppercase hover:outline hover:scale-105 bg-blue-600 max-w-[15vw] p-[0.5vw] rounded-lg mt-[1vw] "
                    onClick={(e) => {
                      handleSearch(e);
                    }}
                  >
                    Show
                  </button>
                </div>) :
                (<div className='text-white min-w-[250px] font-bold flex flex-col justify-center items-center mt-[2vw] backdrop-blur-sm bg-blue-900/60 rounded-lg w-[35vw] p-[3vw]'>
                  <h2>Want to Know Temp. and Humidity of your area </h2>
                  <button className="backdrop-blur-sm bg-blue-600 hover:outline hover:scale-105 mt-[3vw] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type='submit'
                    onClick={() => { setknow(!know) }}
                  >
                    Click
                  </button>
                </div>)
            }
          </>
          {
            form ?
              (<form
                className="bg-white/90 backdrop:blur-sm shadow-md mt-[2vw]  rounded px-8 pt-6 pb-8 mb-4 w-[35vw] min-w-[250px] flex flex-col"
                onSubmit={handleSubmit}
              >
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="feature2">
                    Rainfall (in mm)
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="feature2"
                    type="number"
                    placeholder="Rainfall"
                    name="feature2"
                    value={formData.feature2}
                    onChange={handleChange}
                    required
                    min={0}
                    max={500}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="feature3">
                    Temperature (in °C)
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="feature3"
                    type="number"
                    placeholder="Temperature"
                    name="feature3"
                    value={formData.feature3}
                    onChange={handleChange}
                    min={-10}
                    max={60}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="feature4">
                    Humidity
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="feature4"
                    type="number"
                    placeholder="humidity"
                    name="feature4"
                    value={formData.feature4}
                    onChange={handleChange}
                    min={10}
                    max={80}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
                    State
                  </label>
                  <input
                    className="shadow appearance-none border rounded lowercase w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="feature5"
                    type="text"
                    placeholder="State"
                    name="feature5"
                    value={formData.feature5}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mosquito">
                    Mosquito Type
                  </label>
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="feature6"
                    name="feature6"
                    value={formData.feature6}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    <option value="aedes">Aedes</option>
                    <option value="anopheles">Anopheles</option>
                    <option value="aegypti">Aegypti</option>
                  </select>
                </div>
                <div className="flex items-center justify-between ">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>)
              : (
                <div className='text-zinc-100 w-[35vw] mt-[3vw] min-w-[250px] backdrop-blur-sm bg-blue-900/60 rounded-lg flex justify-center items-center'>
                  {Prediction && Prediction.error ? (
                    <div>Error: {Prediction.error}</div>
                  ) : (
                    <div className='flex  flex-col justify-center items-center p-[2vw] gap-2  text-[1.6vw]'>
                      <p>Prediction:<span className='ml-[1vw] underline text-[1.7vw] text-red-500 font-bold'>{Prediction.prediction}</span> </p>
                      <p>Probability:<span className='ml-[1vw] underline text-[1.7vw] text-red-500 font-bold'>{Prediction.probability}</span></p>
                      <p>No. of Cases:<span className='ml-[1vw] underline text-[1.7vw] text-red-500 font-bold'>{Prediction.no_of_cases}</span></p>
                      <p>Category:<span className='ml-[1vw] underline text-[1.7vw] text-red-500 font-bold'>{Prediction.cat}</span></p>
                      <div>
                        <button onClick={() => setform(!form)} className='bg-blue-600 mt-[1vw]  text-white rounded-lg p-2 hover:outline hover:scale-90'>RECHECK</button>
                      </div>
                    </div>
                  )}
                </div>
              )
          }

          <Link
            to="https://mediafiles.botpress.cloud/aef97a4b-c244-4adc-8fb9-c0384f18f998/webchat/bot.html"
            target="_blank"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute right-[5vw] p-[1vw] cursor-pointer border-[2px] border-zinc-100 hover:bg-green-700 top-[15vw] w-[8vw] h-[8vw] rounded-full bg-green-500 text-[3vw] flex flex-col justify-center items-center text-white"
            >
              <BsChatLeftTextFill />
              <div className="text-[1.5vw] font-bold uppercase">chat</div>
            </motion.div>
          </Link>

          <Footer />
        </div>
      )}
    </>
  );
}

export default Prediction;

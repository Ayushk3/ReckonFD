import { React, useState, useEffect } from 'react';
import Footer from './Footer';
import Loader from './Loader';
const aboutUsData = [
    {
        title: 'Problem Statement',
        image: 'https://images.pexels.com/photos/4145353/pexels-photo-4145353.jpeg?auto=compress&cs=tinysrgb&w=600',
        content:
            "We want to create a system that predicts the likelihood of diseases like dengue and leptospirosis spreading. To do this, we'll use different measures related to disease carriers (vectors), keep track of daily disease reports, and consider factors like rainfall and the environment. The goal is to identify areas that are more prone to disease outbreaks, known as hotspots, to better prepare and prevent the spread of these diseases.",
    },

    {
        title: 'Our Solution',
        image: 'https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=800',
        content: 'The innovative platform presented as a solution for managing RED zones offers a comprehensive approach to enhancing safety measures and community response. By providing real-time insights, users can stay well-informed and make timely decisions, while direct access to experts through an integrated chat application ensures personalized guidance for swift and informed responses. The platform emphasizes effortless accessibility, offering a suite of services with a single click. It promotes data-driven decision-making by storing and analyzing daily data, empowering decision-makers with valuable insights. Furthermore, alert notifications are implemented to promptly inform both authorities and local residents, fostering quick and appropriate actions. The platform prioritizes enhanced security through secure data storage protocols, safeguarding user details and sensitive information to uphold privacy and security standards.'
    },
    {
        title: 'Team',
        image: 'https://images.unsplash.com/photo-1562577308-c8b2614b9b9a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlYW18ZW58MHx8MHx8fDA%3D',
        content: 'Ayush Kumar # Abhishek Ranjan #  Alok Kumar # Aakash Runthala  ',
    },
];

function AboutUs() {

    const [showLoader, setShowLoader] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='pt-[5vw] flex justify-center items-center flex-col overflow-hidden '>
            {showLoader ? (
                <Loader />
            ) : (<>
                {aboutUsData.map((section, index) => (
                    <div key={index} className='section bg-[rgba(10,31,60,1)]/80 shadow-2xl hover:shadow-white  w-[85vw] cursor-pointer border-2 border-blue-400 p-4 mt-10 hover:scale-105 rounded-lg hover:shadow-lg transition-transform duration-300 ease-in-out'>
                        <h1 className='font-bold text-[3.5vw] text-blue-200 uppercase '>{section.title}</h1>
                        <div className='w-full h-[100%] flex gap-[3vw] '
                        >
                            <div className='w-1/3 bg-cover bg-no-repeat bg-center overflow-hidden rounded-3xl transition-transform duration-300 ease-in-out' style={{ backgroundImage: `url(${section.image})` }}></div>
                            <div className='text-[1.3vw] font-semibold text-white w-2/3  justify-center items-center flex flex-col'>
                                {index === 2
                                    ? section.content.split('#').map((name, idx) => (
                                        <div key={idx}>{name}</div>
                                    ))
                                    : section.content}
                            </div>
                        </div>
                    </div>
                ))}

                <Footer /></>)
            } </div>
    );
}

export default AboutUs;



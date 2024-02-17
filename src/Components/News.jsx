import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import Loader from './Loader';
import { motion } from 'framer-motion';
import './blink.css'
function News() {
    const API_KEY = 'c03d226c5c3e40b4b6a43d2d276887c1';
    const [report, setReport] = useState([]);
    const [loader, setloader] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setloader(true);
                const response = await fetch(
                    `https://saurav.tech/NewsAPI/top-headlines/category/health/in.json`
                );

                if (!response.ok) {
                    throw new Error('Error fetching data');
                }

                const result = await response.json();
                // console.log('API Result:', result);

                if (result.articles) {
                    setReport(result.articles);
                    toast.success('Fetched');
                } else {
                    console.error('Error: Unexpected response format', result);
                    toast.error('Error: Unexpected response format');
                }
                setloader(false);
            } catch (error) {
                console.error('Error:', error);
                toast.error('Error fetching data');
            }
        };

        fetchData();
    }, []);
    return (
        loader ? (
            <div className='h-full w-full flex justify-center items-center'>
                <Loader />
            </div>
        ) : (
            <div className='min-h-screen w-full flex flex-col justify-center items-center overflow-hidden'>
                <motion.h1
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: 1 }}
                    className='text-red-600 text-[5vw] mt-[6vw] animate-blink'>
                    NEWS
                </motion.h1>
                <div className='text-white grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8  pt-[2vw] min-h-screen px-[3vw] w-full'>
                    {report.map((article, index) => (
                        <div key={index} className='bg-backdrop-blurr-sm translate-x-1/2 lg:translate-x-0 md:translate-x-0 bg-blue-900/40 p-[1vw] max-w-[50vw] rounded-3xl hover:outline outline-white hover:scale-105 cursor-pointer'>
                            <div className='first flex gap-[1vw]'>
                                <div className='img h-[7vw] w-[7vw] bg-cover bg-center rounded-full' style={{ backgroundImage: `url(${article.urlToImage})` }} />
                                <div className='title w-2/3 text-[#ae3b42] font-bold'>{article.title}</div>
                            </div>
                            <div className='second flex justify-between gap-[1vw] text-sm text-zinc-500'>
                                <div className='source-name'>{article.source.name}</div>
                                <div className='author '>by-{article.author}</div>
                            </div>
                            <div className='flex flex-col justify-center items-center p-[1vw] overflow-scroll'>
                                <div className='third text-md'>{article.content}</div>
                                <div className=' text-green-400 text-sm  '>{article.url}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    );

}

export default News;

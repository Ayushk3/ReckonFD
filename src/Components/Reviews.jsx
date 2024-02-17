import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import Footer from './Footer';
import Loader from './Loader';
// BACKEND KA KAAM BACCH RAHA HI

const initialReviews = [
  { id: 1, Name: 'John Doe', Rating: 4, Comment: 'Great service! I highly recommend.' },
  { id: 2, Name: 'Jane Smith', Rating: 5, Comment: 'Excellent experience. Will use again.' },
  { id: 3, Name: 'Bob Johnson', Rating: 3, Comment: 'Good service, but some improvements needed.' },
  { id: 4, Name: 'Bob Johnson', Rating: 2, Comment: 'Good service!' },
];

function Reviews() {
  const [reviews, setReviews] = useState(initialReviews);
  const [want, setwant] = useState(false);
  const [name, setname] = useState("");
  const [rating, setrating] = useState(0);
  const [comment, setcomment] = useState("");
  const addReview = () => {

    if (name === "" || comment === "" || rating <= 0 || rating > 5) {
      toast.error("Enter Correct Data");
      return;
    }
    else if (rating % 1 !== 0) {
      toast.error("Enter Integer in Rating ");
      return;
    }
    toast.success("Review Added");
    const newReview = {
      id: reviews.length + 1,
      Name: name,
      Rating: rating,
      Comment: comment,
    };
    setReviews([...reviews, newReview]);
    setwant(false);
    setname("");
    setrating(0);
    setcomment("");

  };
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
        <div className='pt-[5vw] flex justify-center items-center flex-col min-h-[100vh] '>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center'>
            {reviews.map((review) => (
              <div key={review.id} className='max-w-[300px] m-4 p-6 bg-white rounded-lg shadow-md'>
                <h3 className='text-lg font-bold mb-2'>{review.Name}</h3>
                <div className='flex items-center mb-2'>
                  <span className='text-yellow-500 '>{Array(0 + review.Rating).fill('★')}</span>
                  <span className='text-gray-500'>{Array(5 - review.Rating).fill('★')}</span>

                </div>

                <p className='text-gray-700'>{review.Comment}</p>
              </div>
            ))}
          </div>
          <div className='border-[1px] border-blue-300 w-full mt-[3vw]'></div>
          {want ? (
            <div className='flex justify-center items-center flex-col gap-6 w-1/2 mt-[3vw]'>
              <form className='py-4 text-white text-[1.5vw] font-bold backdrop-blur-sm px-[2vw] rounded-3xl overflow-hidden  bg-blue-900/80 flex flex-col w-[80%]'>
                <label>NAME</label><br />
                <input type='text' className='text-black w-full rounded-lg p-1' value={name} onChange={(e) => setname(e.target.value)} /><br />

                <label >Ratings (out of 5)</label><br />
                <input
                  type='number'
                  className='text-black w-full rounded-lg p-1'
                  max={5}
                  min={1}
                  value={rating}
                  onChange={(e) => setrating(e.target.value * 1)}
                />
                <br />

                <label>COMMENT</label><br />
                <input type='text' value={comment} className='text-black w-full rounded-lg p-1' onChange={(e) => setcomment(e.target.value)} /><br />
              </form>
              <button
                className='bg-blue-700 text-white px-4 font-bold hover:bg-blue-500 hover:outline py-2 rounded-lg shadow-2xl hover:shadow-white ml-4'
                onClick={addReview}
              >
                Submit Review
              </button>
            </div>
          ) : (
            <button
              className='bg-blue-700  text-white px-4 font-bold hover:bg-blue-500 hover:outline py-2 rounded-lg shadow-2xl hover:shadow-white mt-[5vw] w-1/4'
              onClick={() => { setwant(true) }}
            >
              Add Review
            </button>
          )}
          <div className='border-[1px] border-blue-300 w-full mt-[5vw]'></div>
          <Footer />
        </div>)
      }</>
  );
}

export default Reviews;
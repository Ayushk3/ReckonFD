import { React, useState } from 'react';
import Footer from './Footer';
import { TypeAnimation } from 'react-type-animation';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/ContactUs`, {
        ...formData
      });
      toast.success("Message Sent.");
      toast.success("Our Team will Contact soon!");
      navigate('/AboutUs');
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  }

  return (
    <div className="container mx-auto min-h-screen  flex justify-center items-center flex-col  pt-[10vw] lg:pt-[6vw] md:pt-[7vw] ">
      <TypeAnimation
        sequence={[
          'Con',
          500,
          'Contact',
          1500, // Waits 1s
          'Contact Us',
          2000, // Waits 2s
          'Contact Us ',
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: '2em', display: 'inline-block' }}
        className="text-[4vw] font-semibold mb-6 text-red-600"
      />
      <p className="text-[2vw] text-white mb-4">
        If you have any questions, suggestions, or just want to say hello, we'd love to hear from you!
      </p>
      <form onSubmit={handleSubmit} className="mt-[3vw] backdrop:blur-sm rounded-3xl bg-blue-700/90 w-[45vw] mx-auto py-[3vw] px-[3vw]">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm  font-medium text-white">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder='Name'
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-white">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            placeholder='E-mail'
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-white">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder='Message'
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-300 text-zinc-800 py-2 px-4 rounded-md hover:bg-zinc-200 hover:text-black border-2 hover:border-black"

        >
          Send
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default ContactUs;

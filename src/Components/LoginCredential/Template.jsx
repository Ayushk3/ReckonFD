import React from "react";
import SignupForm from "./SignupForm.jsx";
import LoginForm from "./LoginForm.jsx";
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {

  return (
    <div className="flex flex-col md:flex-row w-full px-[3vw]   max-w-[1160px]  mx-auto  md:gap-x-12  justify-between pt-[15vw] lg:pt-[7vw] md:pt-[9vw]">
      <div className="w-1/2 md:w-1/2 bg-[rgba(10,10,70,1)]/80 sm:w-1/2  mx-auto text-white md:text-left border-[1px] rounded-3xl border-zinc-200 p-[2vw]">
        <h1 className="text-red-600 font-semibold text-2xl md:text-3xl leading-8 md:leading-10">{title}</h1>
        <p className="text-lg md:text-xl  leading-6 md:leading-7 py-[1vw]">
          <span className="text-zinc-100">{desc1}</span>
          <br />
          <span className="text-yellow-100 italic">{desc2}</span>
        </p>

        {formType === "signup" ? <SignupForm setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}

        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="h-[1px] w-full bg-zinc-200"></div>
          <p className="text-zinc-200 font-medium leading-5 md:leading-6">OR</p>
          <div className="h-[1px] w-full bg-zinc-200"></div>
        </div>

        <button className="w-full md:w-auto flex bg-white items-center justify-center rounded-md font-medium text-zinc-800  border px-4 md:px-8 py-2 mt-6">
          <FcGoogle />
          <p>Sign Up with Google</p>
        </button>
      </div>

      <div className="relative w-1/2 top-[10vw]  hidden lg:flex ">
        <div className="w-full h-[53vh] bg-blue-500/30"></div>
        <img
          src={image}
          alt="pattern"
          className="absolute -top-4 rounded-lg right-4 w-3/4 md:w-full h-[50vh] md:block"
          loading="lazy"
          style={{ opacity: 0.9 }}
        />
      </div>
    </div>
  );
};

export default Template;

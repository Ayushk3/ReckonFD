import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignupForm = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn;
  const navigate = useNavigate();

  const [showCreatePass, setShowCreatePass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const [formData, setFormData] = useState({
    userType: "", // "doctor" or "patient"
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    onlineOffline: "", // Only for doctors
    licenseNumber: "", // Only for doctors
    specialization: "", // Only for doctors
  });

  function changeHandler(event) {

    // Update other fields normally
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));

  }


  async function submitHandler(e) {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setIsLoggedIn(true);
      console.log(formData);

      // Await the axios.post request
      await axios.post(`${import.meta.env.VITE_API_URL}/signup`, {
        ...formData,
      });

      toast.success("Account Created");
      toast.success("Signed Up Successfully");
      navigate("/ContactUs");
    } catch (error) {
      setIsLoggedIn(false);
      toast.error(error.message || "Something went wrong");
    }
  }

  return (
    <div>
      <div className="flex justify-center mb-4  rounded-full">
        <div
          className={`mx-2 p-2 rounded-full outline cursor-pointer hover:bg-red-500 ${formData.userType === "doctor"
            ? "bg-red-500 text-white"
            : "bg-gray-700"
            }`}
          onClick={() => setFormData((prev) => ({ ...prev, userType: "doctor" }))}
        >
          Doctor
        </div>
        <div
          className={`mx-2 p-2 rounded-full outline hover:bg-red-500 cursor-pointer  ${formData.userType === "patient"
            ? "bg-red-500 text-white"
            : "bg-gray-700"
            }`}
          onClick={() =>
            setFormData((prev) => ({ ...prev, userType: "patient" }))
          }
        >
          Patient
        </div>
      </div>

      <div className="w-full border-[1px] border-zinc-200 " />
      <form onSubmit={submitHandler} className="mx-auto overflow-hidden">
        <div className="flex flex-col md:flex-row gap-x-4 ">
          <label className="w-full md:w-1/2 mb-4 md:mb-0">
            <p className="text-sm md:text-base text-white mb-1 leading-[1.375rem]">
              First Name <sup className="text-red-500">*</sup>
            </p>
            <input
              type="text"
              required
              placeholder="Enter First Name"
              onChange={changeHandler}
              value={formData.firstName}
              name="firstName"
              className="bg-white rounded-md w-full p-2 text-black text-sm"
            />
          </label>

          <label className="w-full md:w-1/2">
            <p className="text-sm md:text-base text-white mb-1 leading-[1.375rem]">
              Last Name <sup className="text-red-500">*</sup>
            </p>
            <input
              type="text"
              required
              placeholder="Enter Last Name"
              onChange={changeHandler}
              value={formData.lastName}
              name="lastName"
              className="bg-white rounded-md w-full p-2 text-black text-sm"
            />
          </label>
        </div>

        <label className="w-full mt-4">
          <p className="text-sm md:text-base text-white mb-1 leading-[1.375rem]">
            Email Address <sup className="text-red-500">*</sup>
          </p>
          <input
            type="email"
            required
            placeholder="Enter your email address"
            value={formData.email}
            onChange={changeHandler}
            className="bg-white rounded-md w-full p-2 text-black text-sm md:text-base"
            name="email"
          />
        </label>

        <div className="flex flex-col md:flex-row gap-x-4 mt-4">
          <label className="w-full relative">
            <p className="text-sm md:text-base text-white mb-1 leading-[1.375rem]">
              Create Password <sup className="text-red-500">*</sup>
            </p>
            <input
              type={showCreatePass ? "text" : "password"}
              required
              placeholder="Enter Password"
              onChange={changeHandler}
              value={formData.password}
              name="password"
              className="bg-white rounded-md w-full p-2 text-black text-sm"
            />
            <span
              onClick={() => setShowCreatePass(!showCreatePass)}
              className="absolute right-3 top-[38px] cursor-pointer z-10"
            >
              {showCreatePass ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>

          <label className="w-full relative mt-4 md:mt-0">
            <p className="text-sm md:text-base text-white mb-1 leading-[1.375rem]">
              Confirm Password <sup className="text-red-500">*</sup>
            </p>
            <input
              type={showConfirmPass ? "text" : "password"}
              required
              placeholder="Confirm Password"
              onChange={changeHandler}
              value={formData.confirmPassword}
              name="confirmPassword"
              className="bg-white rounded-md w-full p-2 text-black text-sm"
            />
            <span
              onClick={() => setShowConfirmPass(!showConfirmPass)}
              className="absolute right-3 top-[38px] cursor-pointer z-10"
            >
              {showConfirmPass ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <div className="max-w-screen-md mx-auto  ">

          <div className="flex flex-col gap-4">
            <label className="w-full relative mt-[4px] ">
              <p className="text-sm md:text-base text-white mb-1 leading-[1.375rem]">
                Online/Offline <sup className="text-red-500">*</sup>
              </p>
              <div className="flex items-center ">
                <input
                  type="radio"
                  id="online"
                  name="onlineOffline"
                  value="online"
                  checked={formData.onlineOffline === "online"}
                  onChange={changeHandler}
                  className="mr-2 cursor-pointer"
                />
                <label htmlFor="online" className="text-white mr-4">
                  Online
                </label>

                <input
                  type="radio"
                  id="offline"
                  name="onlineOffline"
                  value="offline"
                  checked={formData.onlineOffline === "offline"}
                  onChange={changeHandler}
                  className="mr-2 cursor-pointer"
                />
                <label htmlFor="offline" className="text-white ">
                  Offline
                </label>
              </div>
            </label>

            <label className="w-full relative">
              <p className="text-sm md:text-base text-white mb-1 leading-[1.375rem]">
                {formData.userType === 'patient' ? ' Age' : ' License Number'} <sup className="text-red-500">*</sup>
              </p>
              <input
                type="text"
                required
                placeholder="Enter License Number"
                onChange={changeHandler}
                value={formData.licenseNumber}
                name="licenseNumber"
                className="bg-white rounded-md w-full p-2 text-black text-sm"
              />
            </label>

            <label className="w-full relative">
              <p className="text-sm md:text-base text-white mb-1 leading-[1.375rem]">
                {formData.userType === 'patient' ? ' Requirement' : ' Expertise'} <sup className="text-red-500">*</sup>
              </p>
              <select
                value={formData.specialization}
                onChange={changeHandler}
                name="specialization"
                className="bg-white rounded-md w-full p-2 text-black text-sm"
              >
                <option value="" disabled>
                  {formData.userType === 'patient' ? 'Select Requirement' : 'Select Expertise'}
                </option>
                <option value="surgeon">Surgeon</option>
                <option value="physician">Physician</option>
                <option value="cardiologist">Cardiologist</option>
                <option value="gynecologist">Gynecologist</option>
                <option value="others">Others</option>
              </select>
            </label>

            {formData.specialization === "custom" && (
              <label className="w-full relative">
                <p className="text-sm md:text-base text-white mb-1 leading-[1.375rem]">
                  Custom Specialization <sup className="text-red-500">*</sup>
                </p>
                <input
                  type="text"
                  required
                  placeholder="Enter Custom Specialization"
                  onChange={changeHandler}
                  value={formData.customSpecialization}
                  name="customSpecialization"
                  className="bg-white rounded-md w-full p-2 text-black text-sm"
                />
              </label>
            )}
          </div>
        </div>
        <button className="bg-yellow-500 py-2 px-4 rounded-md mt-6 font-medium text-zinc-900 w-full">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;

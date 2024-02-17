import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = (props) => {
    const setIsLoggedIn = props.setIsLoggedIn;

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    function changeHandler(event) {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    }


    async function submitHandler(e) {
        e.preventDefault();
        try {
            setIsLoggedIn(true);
            await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
                ...formData
            })
            toast.success("Login Successfull");
            navigate("/ContactUs");
        } catch (error) {
            toast.error("User Not Found" || error.message)
            setIsLoggedIn(false);
            navigate("/signup");

        }
    }

    return (
        <form
            onSubmit={submitHandler}
            className="flex flex-col w-full gap-y-4 mt-6 "
        >
            <label className="w-full">
                <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
                    Email Address
                    <sup className="text-red-500">*</sup>
                </p>

                <input
                    type="email"
                    required
                    value={formData.email}
                    placeholder="Enter your email address"
                    onChange={changeHandler}
                    name="email"
                    className="bg-white rounded-md w-full p-2 text-black text-sm"
                />
            </label>

            <label className="w-full relative">
                <p className="text-[0.875rem] text-white mb-1 leading-[1.375rem]">
                    Password
                    <sup className="text-red-500">*</sup>
                </p>

                <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    placeholder="Enter Password"
                    onChange={changeHandler}
                    name="password"
                    className="bg-white rounded-md shadow-sm w-full p-2 text-black"
                />

                <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-[33px] cursor-pointer ">
                    {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye fontSize={24} fill='#AFB2BF' />}
                </span>

                <Link to="#">
                    <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">Forgot Password</p>
                </Link>
            </label>

            <button className="bg-yellow-500 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-zinc-900">Sign in</button>
        </form>
    );
};

export default LoginForm;

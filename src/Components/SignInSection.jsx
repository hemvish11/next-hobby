"use client";

import { useState } from 'react';
import { FaEyeSlash, FaEye, FaLock } from 'react-icons/fa';
import GoogleFB from './GoogleFB';

const SignInSection = ({ signInOut }) => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        signInOut();
    }

    return (

        <section className="w-full">


            <div className=" py-5">

                <div className="flex items-center justify-center">

                    <div className="w-full">

                        <form >
                            <div className='hidden lg:block'>
                                <GoogleFB signInOut={signInOut} />
                            </div>

                            <div className="lg:flex lg:items-center lg:my-[1rem] m-4 hidden">
                                <div className="divider"></div>
                                <p className="divider-text text-[12px]">Or connect with</p>
                                <div className="divider"></div>
                            </div>



                            {/* <!-- Email input --> */}
                            <div className="mb-4">
                                <input type="email" id="email" className="w-full px-2 lg:px-3 py-1.5 lg:py-2.5 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200" placeholder='Email' />
                            </div>



                            {/* <!-- Password input --> */}

                            <div className="mb-4 relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="passwordInput"
                                    className="w-full px-2 lg:px-3 py-1.5 lg:py-2.5 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                                    placeholder='Password'
                                />

                                <button
                                    type="button"
                                    className="absolute top-[10px] lg:top-3 right-3 "
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <FaEyeSlash size={20} color='gray' /> : <FaEye size={20} color='gray' />}
                                </button>
                            </div>




                            <div className="flex justify-between items-center mb-4">


                                {/* <!-- Checkbox --> */}
                                <div className="form-checks flex justify-center items-center gap-2">
                                    <input className="checkbox " type="checkbox" value="" id="form-checkbox" />
                                    <label className="text-gray-700 text-[12px]" htmlFor="form-checkbox"> Remember me </label>
                                </div>

                                <div className="flex items-center gap-2">
                                    <FaLock
                                        color='gray'
                                    />
                                    <a
                                        href="#"
                                        className='no-underline text-gray-700 text-[12px]'>
                                        Forgot password?
                                    </a>
                                </div>



                            </div>





                            {/* <!-- Submit button --> */}
                            <button
                                type="submit"
                                className="lg:border-2 lg:border-[#8064a2] hover:bg-[#745699] lg:hover:bg-[#8064a2] lg:hover:text-white py-2.5 px-4 text-white lg:text-black rounded-lg text-[12px] lg:text-[14px] w-full font-[600] bg-[#8064a2] lg:bg-[#f7f5f9]"
                                onClick={handleSubmit}

                            >Continue</button>


                            <div className="divider-container m-4 lg:hidden">
                                <div className="divider"></div>
                                <p className="divider-text text-[12px]">Or connect with</p>
                                <div className="divider"></div>
                            </div>

                            <div className='lg:hidden'>
                                <GoogleFB signInOut={signInOut} />
                            </div>


                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignInSection;
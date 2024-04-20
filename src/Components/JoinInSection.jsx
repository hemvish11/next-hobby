"use client";

import React, { useEffect, useState } from 'react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import GoogleFB from './GoogleFB';


const JoinInSection = ({signInOut}) => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        signInOut();
    }



    const [passwordInput, setPasswordInput] = useState("");
    const [strengthClasses, setStrengthClasses] = useState(["", "", ""]);

    useEffect(() => {
        if (!passwordInput) return;

        const password = passwordInput;
        let strength = calculatePasswordStrength(password);

        const classes = ["", "", ""];
        if (strength >= 1) {
            classes[0] = 'weak';
        }
        if (strength >= 2) {
            classes[1] = 'medium';
        }
        if (strength >= 3) {
            classes[2] = 'strong';
        }
        setStrengthClasses(classes);
    }, [passwordInput])

    function calculatePasswordStrength(password) {
        const lengthWeight = 0.2;
        const uppercaseWeight = 0.5;
        const lowercaseWeight = 0.5;
        const numberWeight = 0.7;
        const symbolWeight = 1;

        let strength = 0;

        // Calculate the strength based on the password length
        strength += password.length * lengthWeight;

        // Calculate the strength based on uppercase letters
        if (/[A-Z]/.test(password)) {
            strength += uppercaseWeight;
        }

        // Calculate the strength based on lowercase letters
        if (/[a-z]/.test(password)) {
            strength += lowercaseWeight;
        }

        // Calculate the strength based on numbers
        if (/\d/.test(password)) {
            strength += numberWeight;
        }

        // Calculate the strength based on symbols
        if (/[^A-Za-z0-9]/.test(password)) {
            strength += symbolWeight;
        }

        return strength;
    }

    return (

        <section className="w-full">


            <div className="py-5">



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

                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="passwordInput"
                                    className="w-full px-2 lg:px-3 py-1.5 lg:py-2.5 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                                    placeholder='Password'
                                    onChange={(e) => setPasswordInput(e.target.value)}
                                    value={passwordInput}
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
                                {/* -------------------------Strength meter starts---------------------------------- */}

                                <div className="password-meter mb-3">
                                    <div className={`meter-section rounded me-2 bg-white ${strengthClasses[0]}`}><span className='bars'>Hiiiiiiiiiiiii</span></div>
                                    <div className={`meter-section rounded me-2 bg-white ${strengthClasses[1]}`}><span className='bars'>Hiiiiiiiiiiiii</span></div>
                                    <div className={`meter-section rounded me-2 bg-white ${strengthClasses[2]}`}><span className='bars'>Hiiiiiiiiiiiii</span></div>
                                </div>
                                {/* -------------------------Strength meter ends---------------------------------- */}



                                <div className="flex justify-center items-center gap-2">

                                    <a
                                        href="#"
                                        className='text-decoration-none text-gray-color text-[10px]'>
                                        Password strength
                                    </a>
                                </div>




                            </div>
                            <div className='terms mb-1 text-[9px] lg:text-[12px]'>
                                <p >By continuing, you agree to our <span>Terms of Service</span> and <span>Privacy Policy</span></p>
                            </div>




                            {/* <!-- Submit button --> */}
                            <button
                                type="submit"
                                className="py-2.5 px-4 text-white rounded-lg w-full font-[600] bg-[#8064a2]  hover:bg-[#745699] text-[12px] lg:text-[14px]"
                                onClick={handleSubmit}

                            ><span className='hidden lg:inline '>Agree and </span>Continue</button>


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

export default JoinInSection;
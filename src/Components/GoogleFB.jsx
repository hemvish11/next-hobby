"use client";

import React from 'react'

function GoogleFB({ signInOut }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        signInOut();
    }
    return (
        <div className='flex flex-col gap-3'>

            <button
                href="#"
                // className="d-flex align-items-center justify-content btn btn-lg w-full"
                className="border border-[#8064a2] hover:bg-[#8064a2]/[10%]  flex items-center justify-center justif px-2 lg:px-3 py-1.5 lg:py-2.5 rounded-lg text-xl w-full"
                onClick={handleSubmit}

            > <div>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        preserveAspectRatio="xMidYMid"
                        viewBox="0 0 256 262"
                        id="google"
                        className=""

                    >
                        <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>

                </div>
                <div className='text-center w-full text-[12px] lg:text-[14px]'>
                    <strong>Continue with Google</strong>
                </div>
            </button>


            <button
                href="#"
                className="border border-[#8064a2] hover:bg-[#8064a2]/[10%] flex items-center justify-center justif px-2 lg:px-3 py-1.5 lg:py-2.5 rounded-lg text-xl w-full"
                onClick={handleSubmit}
            >
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25" height="25"
                        viewBox="126.445 2.281 589 589" id="facebook"><circle cx="420.945" cy="296.781" r="294.5" fill="#3c5a9a"></circle><path fill="#fff" d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z"></path></svg>
                </div>
                <div className='text-center w-full text-[12px] lg:text-[14px]'>
                    <strong>Continue with Facebook</strong>
                </div>
            </button>

        </div>
    )
}

export default GoogleFB
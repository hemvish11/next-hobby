"use client";

import React, { useState } from 'react'
import { FaSearch, FaBell } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import NavTemp from './Dropdown';

function NavBar({ signedIn, hamburgerClicked, handleClick, signInOut }) {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav class="flex items-center justify-between shadow-md p-2 poppins gap-8 pr-8 md:pr-10 bg-white">

            <button onClick={scrollToTop} className='fixed right-0 bottom-[1vh]'>
                <img src='/arrows/go-up.svg' alt='go-up' />
            </button>

            <div className='flex justify-center items-center'>
                {!hamburgerClicked ?
                    <a className='px-5 lg:px-14' href="#"><img className='h-[42px] w-[186.4px] lg:min-w-[200px] lg:h-[60px] mid:min-w-[293.26px]' src='/logofull.svg' alt="logo" /></a>
                    :
                    <a className='px-[22px]' href="#"><img className='h-[36px] w-[36px]' src='/h.svg' alt="h" /></a>

                }
                <div className='hidden mid:block relative '>
                    <input type='name' placeholder='Search here...' className='border-1 border-[#EBEDF0] bg-[#f8f9fa] p-2 h-[40px] w-[300px] rounded-lg text-[12px]' />
                    <div className='cursor-pointer w-[40px] h-[40px] bg-[#8064a2] hover:bg-[#745699]  absolute right-0 top-0 flex justify-center items-center rounded-e-lg '>
                        <img src='/lens.svg' alt='lens-logo' />
                    </div>

                </div>
            </div>




            <div className='hidden sm:flex justify-center items-center gap-4 lg:gap-8'>

                <div className='hidden justify-center items-center gap-4 lg:gap-8 text-[14px]/[22px] lg:flex'>


                    <div
                        onMouseOver={() => toggleDropdown()}
                        onMouseOut={() => toggleDropdown()}
                        className='flex justify-center items-center cursor-pointer'>
                        
                        <img src='/explore.svg' alt='explore' />
                        <NavTemp isOpen={isOpen} />
                        <img src='/arrows/downarrow.svg' alt='downarrow' />
                    </div>

                    <div className='flex justify-center items-center cursor-pointer'>
                        <img src='/hobbies.svg' alt='hobbies' />
                        <span>Hobbies</span>
                        <img src='/arrows/downarrow.svg' alt='downarrow' />
                    </div>

                </div>


                <img className='cursor-pointer' src='/bookmark.svg' alt='bookmark' />
                <img className='cursor-pointer' src='/alarm.svg' alt='alarm' />
                <img className='cursor-pointer' src='/cart.svg' alt='cart' />
                {signedIn ?
                    (<div className='flex items-center justify-center cursor-pointer'>
                        <img src='/profile.svg' alt='profile' />
                        <img src='/arrows/downarrow.svg' alt='downarrow' />

                    </div>) :
                    <button 
                    onClick={()=> signInOut()}
                    className='border border-[#8064a2] rounded-lg text-[#8064a2] hover:text-white hover:bg-[#8064a2] text-[14px]/[16px] font-semibold h-[40px] w-[112px]'>Sign In</button>
                }
            </div>


            {
                !hamburgerClicked
                    ?
                    <div
                        onClick={() => handleClick()}
                        class="flex gap-5 justify-end items-center sm:hidden" role="search"
                    >
                        <div className='text-[#8064a2] hover:text-[#9845ff]'>
                            <FaSearch size={24} />
                        </div>
                        <div className='text-[#8064a2] hover:text-[#9845ff]'>
                            <FaBell size={24}/>
                        </div>
                        <button class="navbar-toggler hamburger text-[#8064a2] hover:text-[#9845ff]" type="button" aria-label="Toggle navigation">
                            <GiHamburgerMenu size={24}  />
                        </button>
                    </div>
                    :
                    <div
                        onClick={() => handleClick()}
                        class="flex gap-5 justify-end items-center sm:hidden" role="search"
                    >
                        <a className='' href="#"><img className='h-[32px] w-[32px]' src='/cross.svg' alt="cross" /></a>
                    </div>

            }

        </nav>

    )
}

export default NavBar
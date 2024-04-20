"use client";
import React, { useState } from 'react'

function CardLoggedIn({ item }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div
            style={{
                borderColor: `#${item.border}`,
                backgroundColor: isHovered ? `#${item.border}` : 'white',
            }
            }
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}

            className={`hover:text-white flex flex-col justify-center items-center mx-8 lg:mx-0 my-4 lg:my-4 border-2 rounded-lg min-w-[312px] h-[142px] p-4 lg:w-[360px] lg:h-[175px] text-left bg-white `}>

            <div className='flex flex-col items-start lg:px-2 '>

                <div className='flex gap-2 items-center justify-center my-2 lg:my-3 '>
                    {!isHovered && item.svg}
                    {isHovered && item.hoversvg}
                    <h2 className='text-[18px]/[26px] lg:text-[20px]/[30px] font-semibold '>{item.title}</h2>
                </div>

                <p className='text-left w-[100%] mb-4 lg:mb-6 text-[12px]/[18px] lg:font-[400] lg:text-[14px]/[21px] lg:w-full'>{item.content}</p>

                
            </div>

        </div>
    )
}

export default CardLoggedIn
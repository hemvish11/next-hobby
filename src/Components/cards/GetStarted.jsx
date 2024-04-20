import Image from 'next/image';
import React from 'react'

function GetStarted() {
    return (
        <div className='flex flex-col items-center justify-center bg-[#f7fdff] pb-8 pt-10'>

            <div className='w-[90%]'>
                <h1 className='mt-3 text-[18px]/[27px] md:text-[27px]/[40px] lg:text-[36px]/[54px]  font-[600]'><i>Your <span className='text-[#8064a2]'>Hobby</span>, your <span className='text-[#0096c8]' >Community...</span></i></h1>
                <button className='border my-6 px-4 py-2 rounded-xl bg-[#8064a2]  hover:bg-[#745699]  text-white text-[14px]/[20px] md:text-[17px]/[25px] lg:text-[20px]/[30px] font-bold'> Get started</button>
                <Image height={1000} width={1000} className='w-full mt-8' src='/musicgroup.svg' alt='musicgroup'/>
            </div>

        </div>
            
    )
}

export default GetStarted;
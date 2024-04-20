import React from 'react'
import { Cards } from "@/Components/cards/data/SignInCardsData"
import CardLoggedIn from '@/Components/cards/CardLoggedIn'
import Image from 'next/image'

function LoggedIn() {
    return (
        <div className='flex flex-col justify-center items-center mt-1'>

            <div className='flex flex-col items-center rounded-lg lg:w-[740px] md:h-[440px] lg:h-[499px] bg-white mt-[2px] lg:mt-[20px] pb-8 lg:pb-4'>

                <div className='flex items-center justify-center mt-6 mb-6 gap-2' >
                    <Image height={28} width={28} src='/plus.svg' alt='plus' />
                    <span className='font-semibold lg:text-[24px]/[36px]'>Add Your Listing</span>
                </div>

                <div className='flex flex-wrap lg:h-[380px] justify-center items-center gap-10 w-[90%] md:w-[100%]'>

                    {Cards.map((item,index) => {
                        return (
                            <div className='flex justify-center items-center md:w-1/2 max-w-[312px] max-h-[142px]'>
                                <CardLoggedIn key={index} item={item} />
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>

    )
}

export default LoggedIn
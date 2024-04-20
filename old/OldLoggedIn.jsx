import React from 'react'
import { Cards } from "@/Components/cards/data/SignInCardsData"
import CardLoggedIn from '@/Components/cards/CardLoggedIn'

function LoggedIn() {
    return (
        <div className='flex flex-col items-center justify-center lg:w-[840px] lg:h-[542px]'>

            <div
                style={{
                    backgroundColor: 'white',
                    '@media (min-width: 1024px)': {
                        width: '840px',
                        height: '542px',
                        marginTop: '20px'
                    }
                }
                }
                className='flex flex-col flex-wrap rounded-lg lg:w-[840px]'>
                <div className='flex items-center justify-center my-6 gap-2' >
                    <img src='/plus.svg' alt='plus' />
                    <span className=''>Add Your Listing</span>
                </div>

                <div className='flex flex-wrap lg:w-[840px] lg:h-[542px] justify-center items-center'>

                    {Cards.map((item) => {
                        return (
                            <div className='flex justify-center items-center md:w-1/2 max-w-[312px] max-h-[142px]'>
                                <CardLoggedIn item={item} />
                                {/* hi */}
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>

    )
}

export default LoggedIn
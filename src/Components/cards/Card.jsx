import React from 'react'

function Card({item}) {
    return (
        <div className='border m-6 p-4 rounded-lg max-w-[480px] lg:max-w-[608px] min-h-[216px] lg:h-[297px] lg:text-left '>

            <div className='flex flex-col items-center  lg:items-start lg:pl-8 lg:my-3'>

                <div className='flex gap-2 items-center justify-center my-2 lg:my-3'>

                    {item.svg}

                    <h2 className='font-bold text-[18px] lg:text-[24px]/[36px] '>{item.title}</h2>

                </div>

                <p className='text-center lg:text-left w-[70%] mb-4 lg:mb-6 text-[12px]/[20px] lg:font-[300] lg:text-[18px]/[27px] lg:w-full'>{item.content}</p>

                <button
                    href="#"
                    className="mb-3 lg:my-2 border border-[#8064a2] hover:bg-[#745699]
                     hover:text-white flex items-center justify-center py-2.5 px-4 rounded-lg w-[90%] lg:w-[100px]
                     text-[12px]/[16px] lg:text-[14px]/[16px] purple-text text-center "
                >

                        <strong className=''>{item.buttonText}</strong>


                </button>
            </div>

        </div>
    )
}

export default Card
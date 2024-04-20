import React from 'react'

function AddCard() {
    return (
        <div className='bg-[#f7fdff] py-10 lg:px-10 w-full flex flex-col items-center justify-center'>

            <div className='border m-6 p-4 rounded-lg max-w-[480px] lg:max-w-[95%] lg:w-[95%] min-h-[216px]  lg:h-[264px] lg:text-left bg-white'>

                <div className='flex flex-col items-center lg:items-start lg:my-3 lg:pl-6'>

                    <div className='flex gap-2 items-center justify-center my-2 lg:my-3'>

                        <img height="42px" width="42px" src='/AddLogo.svg' alt='add-logo' />

                        <h2 className='font-bold text-[18px]/[] lg:text-[24px]/[36px] '>Add your own</h2>

                    </div>
                    <p className='text-center lg:text-left w-[70%] mb-4 lg:mb-6 text-[12px]/[20px] lg:font-[300] lg:text-[18px]/[30px] lg:w-full'>Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>

                    <button
                        href="#"
                        className="mb-3 lg:my-2 border border-[#8064a2] hover:bg-[#745699]
                     hover:text-white flex items-center justify-center py-2.5 px-4 rounded-lg w-[90%] lg:w-[100px]
                     text-center purple-text text-[12px]/[16px] lg:text-[14px]/[16px]"
                    >
                        <strong>Add new</strong>

                    </button>
                </div>

            </div>
        </div>

    )
}

export default AddCard;
"use client";
import React from 'react'
import People from './svgs/People'
import SignJoin from './SignJoin';


function Introduction({ signInOut }) {


  return (
    <section className='flex flex-wrap'>


      <div className='flex flex-col p-6 pb-0 bg-[#f7f5f9] px-9 lg:w-3/5 lg:px-16'>

        <h1 className='mt-3 text-[18px] md:text-[24px] lg:text-[30px] mid:text-[36px] font-[600]'><i>Explore your <span style={{ color: "#0096c8" }}>hobby</span> or <span style={{ color: "#8064a2" }}>passion</span></i></h1>

        <p className=' mt-4 font-[300] text-[12px]/[22px] md:text-[13px]/[26px] lg:text-[14px]/[30px]'>

          Sign-in to interact with a community of fellow
          hobbyists and an eco-system of experts, teachers,
          suppliers, classes, workshops, and places to
          practice, participate or perform.

          <span className='hidden md:inline'> Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…</span>

          <span className=' mt-4 hidden md:inline-block'>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</span>
        </p>

        <div className=' self-center mt-6 lg:hidden w-full max-w-[410px]'>
          <SignJoin signInOut={signInOut} />
        </div>

        <People />

      </div>


      <div className='p-6 pb-0 bg-[#f7f5f9] lg:w-2/5 hidden lg:block lg:px-10'>
        <SignJoin signInOut={signInOut} />
      </div>



    </section>
  )
}

export default Introduction
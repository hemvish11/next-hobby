import Image from "next/image";

export default function Testimonial() {
    return (
        <section className="w-full flex flex-col justify-center items-center">

            <div className='border m-6 p-4 rounded-lg max-w-[480px] lg:max-w-[90%] lg:w-[95%] min-h-[216px]  lg:text-left bg-[#f7f5fd]'>

                <div className='flex flex-col items-center lg:items-start lg:my-3 lg:px-6'>

                    <div className='flex gap-2 items-center justify-center my-2 lg:my-3'>

                        <Image height={42} width={42} src="/testimonial.svg" alt="testimonial" />
                        <span className="font-semibold text-[18px]/[27px] lg:text-[24px]/[36px] ">Testimonials</span>
                    </div>

                    <p className=" text-center lg:text-left w-[90%] mb-4 lg:mb-6 text-[12px]/[20px] lg:font-[300] lg:text-[#6d747a] lg:text-[18px]/[30px] lg:w-full">
                        In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
                    </p>
                </div>



                <div className="flex flex-col lg:flex-row-reverse justify-center items-center lg:px-6 lg:gap-4">


                    <div className="flex justify-center gap-6 items-center w-[80%] lg:w-[50%] my-5">
                        <Image height={80} width={80} src="/dancer.svg" alt="dancer-Image" />
                        <div className="">
                            <p className="text-[#8064A2] text-[16px]/[24px] lg:text-[18px]/[27px] font-bold">Shubha Nagarajan</p>
                            <p className="text-[#0096c8] text-[12px]/[18px] lg:text-[14px]/[21px]">Classical Dancer</p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center bg-[#ccc1da] w-[90%] lg:w-[100%] rounded-lg p-4 my-4 ">
                        <Image className="cursor-pointer" height={32} width={32} src="/music/play.svg" alt="play-button" />


                        <div className="flex items-center justify-center w-[50%] lg:w-[60%] h-[2px]">
                            <Image height={11} width={11} src="/music/circle.svg" alt="circle" />
                            <div className="w-[100%] bg-white p-[1px]"></div>

                        </div>




                        <span className="text-xs text-[#8064a2]">0:00</span>
                        <Image height={54} width={54} src="/music/avatar.svg" alt="avatar" />
                    </div>


                </div>


            </div>
        </section>

    )
}
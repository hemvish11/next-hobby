import Image from "next/image";

export default function Footer() {
    return (
        <div>
            <div className="flex flex-wrap px-2 md:px-4 lg:px-8">
                <div className="p-8 flex flex-col gap-4 w-full md:w-1/2 lg:w-1/5">
                    <div className="flex items-center justify-between">
                        <h1 className="text-[12px]/[18px] lg:text-[14px]/[18px] font-bold">Hobbycue</h1>
                        <Image height={24} width={24} className="cursor-pointer md:hidden" src="/arrows/uparrow.svg" alt="uparrow" />
                    </div>
                    <p className="text-[11.5px]/[18px] lg:text-[14px]/[18px] text-[#6d747a] cursor-pointer hover:text-gray-700">About Us</p>
                    <p className="text-[11.5px]/[18px] lg:text-[14px]/[18px] text-[#6d747a] cursor-pointer hover:text-gray-700">Our Services</p>
                    <p className="text-[11.5px]/[18px] lg:text-[14px]/[18px] text-[#6d747a] cursor-pointer hover:text-gray-700">Work with Us</p>
                    <p className="text-[11.5px]/[18px] lg:text-[14px]/[18px] text-[#6d747a] cursor-pointer hover:text-gray-700">FAQ</p>
                    <p className="text-[11.5px]/[18px] lg:text-[14px]/[18px] text-[#6d747a] cursor-pointer hover:text-gray-700">Contact Us</p>
                </div>
                <div className="p-8 flex flex-col gap-4 w-full md:w-1/2 lg:w-1/5">
                    <div className="flex items-center justify-between">
                        <h1 className="text-[12px]/[18px] lg:text-[14px]/[18px] font-bold">How DO I</h1>
                        <Image height={24} width={24} className="cursor-pointer md:hidden" src="/arrows/uparrow.svg" alt="uparrow" />
                    </div>
                    <p className="text-[11.5px]/[18px] lg:text-[14px]/[18px] text-[#6d747a] cursor-pointer hover:text-gray-700">Sign Up</p>
                    <p className="text-[11.5px]/[18px] lg:text-[14px]/[18px] text-[#6d747a] cursor-pointer hover:text-gray-700">Add a Listing</p>
                    <p className="text-[11.5px]/[18px] lg:text-[14px]/[18px] text-[#6d747a] cursor-pointer hover:text-gray-700">Claim Listing</p>
                    <p className="text-[11.5px]/[18px] lg:text-[14px]/[18px] text-[#6d747a] cursor-pointer hover:text-gray-700">Post a Query</p>
                    <p className="text-[11.5px]/[18px] lg:text-[14px]/[18px] text-[#6d747a] cursor-pointer hover:text-gray-700">Add a Blog Post</p>
                    <p className="text-[11.5px]/[18px] lg:text-[14px]/[18px] text-[#6d747a] cursor-pointer hover:text-gray-700">Other Queries</p>

                </div>
                <div className="p-8 flex flex-col gap-4 w-full md:w-1/2 lg:w-1/5">
                    <div className="flex items-center justify-between">
                        <h1 className="text-[12px]/[18px] lg:text-[14px]/[18px] font-bold">Quick Links</h1>
                        <Image height={24} width={24} className="cursor-pointer md:hidden" src="/arrows/uparrow.svg" alt="uparrow" />
                    </div>
                    <p className="text-[11.5px]/[18px] lg:text-[14px]/[18px] text-[#6d747a] cursor-pointer hover:text-gray-700">Listings</p>
                    <p className="text-[11.5px]/[18px] lg:text-[14px]/[18px] text-[#6d747a] cursor-pointer hover:text-gray-700">Blog Posts</p>
                    <p className="text-[11.5px]/[18px] lg:text-[14px]/[18px] text-[#6d747a] cursor-pointer hover:text-gray-700">Shop / Store</p>
                    <p className="text-[11.5px]/[18px] lg:text-[14px]/[18px] text-[#6d747a] cursor-pointer hover:text-gray-700">Community</p>
                </div>
                <div className="p-8 flex flex-col gap-4 w-full md:w-1/2 lg:w-2/5">

                    <div>
                        <h1 className="text-[12px]/[18px] lg:text-[14px]/[18px] font-bold">Social Media</h1>
                        <div className="flex justify-between my-5">
                            <Image height={32} width={32} className="cursor-pointer" src="/icons/fb.svg" alt="" />
                            <Image height={32} width={32} className="cursor-pointer" src="/icons/twitter.svg" alt="" />
                            <Image height={32} width={32} className="cursor-pointer" src="/icons/insta.svg" alt="insta" />
                            <Image height={32} width={32} className="cursor-pointer" src="/icons/pinterest.svg" alt="pinterest" />
                            <Image height={32} width={32} className="cursor-pointer" src="/icons/gplus.svg" alt="gplus" />
                            <Image height={32} width={32} className="cursor-pointer" src="/icons/yt.svg" alt="" />
                            <Image height={32} width={32} className="cursor-pointer" src="/icons/telegram.svg" alt="" />
                            <Image height={32} width={32} className="cursor-pointer" src="/icons/sms.svg" alt="" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <h1 className="text-[12px]/[18px] lg:text-[14px]/[18px] font-bold">Invite Friends</h1>
                        <div className="mt-4 relative ">
                            <input className="border-[2px] w-full rounded-lg p-1 border-[#8064a2] focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200" type="name" placeholder="Email ID" />
                            <div className="w-[80px] h-[36px] bg-[#8064a2]  hover:bg-[#745699] cursor-pointer absolute right-0 top-0
                                z-0 rounded-r-lg">
                            </div>
                            <span className="absolute top-[10px] right-[24px] z-10 text-white  text-[12px]/[16px] font-semibold">Invite</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 bg-[#f7f5f9] p-3">
                <p className="cursor-pointer text-center text-[12px]/[18px] lg:text-[14px]/[18px]  text-[#08090a] font-[500]">© Purple Cues Private Limited</p>
            </div>
        </div>
    )
}
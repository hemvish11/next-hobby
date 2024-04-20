import React, { useState } from 'react';

const NavTemp = ({isOpen}) => {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggleDropdown = () => {
    //     setIsOpen(!isOpen);
    // };

    return (
        <div className="relative inline-block">
            <button
                className="inline-block text-[14px]/[22px]"

            >
                Explore
            </button>
            {isOpen && (
                <div className="absolute z-10 bg-white shadow-lg rounded mt-[27px] w-[220px]">
                    <a
                        href="#"
                        className="border block text-gray-800 hover:bg-gray-200  w-[220px] p-3"
                    >
                        People - Community
                    </a>
                    <a
                        href="#"
                        className="border block text-gray-800 hover:bg-gray-200  w-[220px] p-3"
                    >
                        Places - Venues
                    </a>
                    <a
                        href="#"
                        className="border block text-gray-800 hover:bg-gray-200  w-[220px] p-3"
                    >
                        Programs - Events
                    </a>
                    <a
                        href="#"
                        className="border block text-gray-800 hover:bg-gray-200  w-[220px] p-3"
                    >
                        Products - Store
                    </a>
                    <a
                        href="#"
                        className="border block text-gray-800 hover:bg-gray-200  w-[220px] p-3"
                    >
                        Blogs
                    </a>
                </div>
            )}
        </div>
        
    );
};

export default NavTemp;
import React from 'react';

const Leaderboard_Nav_drop_Btn = () => {
    return (
        <div className="w-full">
            {/* Heading Section */}
            <div className="flex justify-center items-center w-full">
                <img
                    src="/images/logo.jpg"
                    alt="Logo"
                    className="w-10 h-10 md:w-20 md:h-20 ms:w-15 ms:h-15"
                />
                <h1 className=" md:text-3xl sm:text-2xl text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#140f30] via-[#4332a4] to-[#5540cb] ml-2">
                    Google Developer Leaderboard
                </h1>
            </div>

            {/* Panel Section */}
            <div className="flex justify-around items-center w-full text-black">
                {/* Team Selection Section */}
                <div className="flex items-center p-5">
                    <span className="sm:text-xl text-[1rem] px-1">Select team:</span>
                    <select className="font-bold rounded-lg border border-gray-300 sm:p-2 p-1 cursor-pointer">
                        <option value="technical">Technical</option>
                        <option value="content_creation">Content Creation</option>
                        <option value="graphics">Graphics</option>
                        <option value="sponsorship">Sponsorship</option>
                        <option value="event_management">Event Management</option>
                    </select>
                </div>

                {/* Admin Button */}
                <div className="group">
                    <button className="font-bold text-white md:text-xl sm:text-xs text-xs md:py-2 md:px-3 sm:py-1.5 sm:px-2 px-1.5 py-1 rounded-md  bg-gradient-to-r from-[#171138] via-[#392d7e] to-[#4c38ba] cursor-pointer group-hover:from-[#342970] group-hover:via-[#5644ba] group-hover:to-[#634af0] group-active:from-[#634af0] group-active:via-[#5644ba] group-active:to-[#342970] ">
                        Admin Portal
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Leaderboard_Nav_drop_Btn;





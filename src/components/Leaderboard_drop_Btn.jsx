import React from 'react';

const teams = ["Technical", "Content Creation", "Graphics", "Sponsorship", "Event Management"]

const Leaderboard_drop_Btn = () => {
    return (
        <div className="w-full">
            <div className="flex justify-around items-center w-full text-black">
                <div className="flex items-center p-5">
                    <span className="sm:text-xl text-[0.8rem] px-1">Select team:</span>
                    <select className="font-bold rounded-lg border border-gray-300 sm:p-2 p-[3px] w-28 sm:w-44 cursor-pointer text-xs sm:text-[15px]">
                        {teams.map((oneTeam, index) => (
                            <option key={index} value={oneTeam.toLowerCase()}>{oneTeam}</option>
                        ))}
                    </select>
                </div>
                <div className="group">
                    <button className="font-bold text-white md:text-xl sm:text-xs text-[10px] md:py- md:px-3 sm:py-1.5 sm:px-2 px-1.5 py-1 rounded-md relative bottom-[2px] bg-gradient-to-r from-[#171138] via-[#392d7e] to-[#4c38ba] cursor-pointer group-hover:from-[#342970] group-hover:via-[#5644ba] group-hover:to-[#634af0] group-active:from-[#634af0] group-active:via-[#5644ba] group-active:to-[#342970] ">
                        Admin Portal
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Leaderboard_drop_Btn;




